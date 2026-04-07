/**
 * API Client — Homes.ph Event Management System
 *
 * This client is API-ready. When your manager provides the base URL, set it
 * in your .env.local:
 *   NEXT_PUBLIC_API_URL=https://api.homes.ph/v1
 *
 * The client automatically:
 *  - Attaches the Bearer token from localStorage on every request
 *  - Refreshes the token on 401 responses
 *  - Throws typed ApiError objects on failure
 */

import { ApiError } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.homes.ph/v1';

// ─── Token Management ─────────────────────────────────────────────────────────

export const TokenStorage = {
  getAccess: (): string | null =>
    typeof window !== 'undefined' ? localStorage.getItem('access_token') : null,
  getRefresh: (): string | null =>
    typeof window !== 'undefined' ? localStorage.getItem('refresh_token') : null,
  setAccess: (token: string) =>
    typeof window !== 'undefined' && localStorage.setItem('access_token', token),
  setRefresh: (token: string) =>
    typeof window !== 'undefined' && localStorage.setItem('refresh_token', token),
  clear: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    }
  },
};

// ─── Error class ─────────────────────────────────────────────────────────────

export class ApiException extends Error {
  public code?: string;
  public errors?: Record<string, string[]>;
  public status: number;

  constructor(message: string, status: number, error?: ApiError) {
    super(message);
    this.name = 'ApiException';
    this.status = status;
    this.code = error?.code;
    this.errors = error?.errors;
  }
}

// ─── Token Refresh ────────────────────────────────────────────────────────────

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const onTokenRefreshed = (token: string) => {
  refreshSubscribers.forEach((cb) => cb(token));
  refreshSubscribers = [];
};

const addRefreshSubscriber = (cb: (token: string) => void) => {
  refreshSubscribers.push(cb);
};

async function refreshAccessToken(): Promise<string> {
  const refreshToken = TokenStorage.getRefresh();
  if (!refreshToken) throw new ApiException('No refresh token', 401);

  const res = await fetch(`${BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });

  if (!res.ok) {
    TokenStorage.clear();
    throw new ApiException('Session expired. Please log in again.', 401);
  }

  const data = await res.json();
  TokenStorage.setAccess(data.accessToken);
  TokenStorage.setRefresh(data.refreshToken);
  return data.accessToken;
}

// ─── Core Fetch ───────────────────────────────────────────────────────────────

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: unknown;
  params?: Record<string, string | number | boolean | undefined | null>;
  requiresAuth?: boolean;
};

async function request<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = 'GET', body, params, requiresAuth = true } = options;

  // Build URL with query params
  const url = new URL(`${BASE_URL}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
    });
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (requiresAuth) {
    const token = TokenStorage.getAccess();
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }

  const makeRequest = async (authHeader?: string): Promise<Response> => {
    if (authHeader) headers['Authorization'] = `Bearer ${authHeader}`;
    return fetch(url.toString(), {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
  };

  let res = await makeRequest();

  // Token refresh on 401
  if (res.status === 401 && requiresAuth) {
    if (!isRefreshing) {
      isRefreshing = true;
      try {
        const newToken = await refreshAccessToken();
        isRefreshing = false;
        onTokenRefreshed(newToken);
        res = await makeRequest(newToken);
      } catch {
        isRefreshing = false;
        TokenStorage.clear();
        if (typeof window !== 'undefined') window.location.href = '/login';
        throw new ApiException('Session expired', 401);
      }
    } else {
      // Wait for the ongoing refresh
      const newToken = await new Promise<string>((resolve) => {
        addRefreshSubscriber(resolve);
      });
      res = await makeRequest(newToken);
    }
  }

  if (!res.ok) {
    let errorData: ApiError | undefined;
    try {
      errorData = await res.json();
    } catch {
      // Non-JSON error body
    }
    throw new ApiException(
      errorData?.message || `Request failed with status ${res.status}`,
      res.status,
      errorData
    );
  }

  // Handle 204 No Content
  if (res.status === 204) return undefined as T;

  return res.json();
}

// ─── HTTP Shorthand helpers ───────────────────────────────────────────────────

export const api = {
  get: <T>(
    endpoint: string,
    params?: RequestOptions['params'],
    requiresAuth = true
  ) => request<T>(endpoint, { method: 'GET', params, requiresAuth }),

  post: <T>(endpoint: string, body?: unknown, requiresAuth = true) =>
    request<T>(endpoint, { method: 'POST', body, requiresAuth }),

  put: <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, { method: 'PUT', body }),

  patch: <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, { method: 'PATCH', body }),

  delete: <T>(endpoint: string) => request<T>(endpoint, { method: 'DELETE' }),
};

export default api;
