import api from './client';
import { TokenStorage } from './client';
import type { AuthResponse, LoginRequest, SignupRequest, ApiResponse } from './types';

export const authApi = {
  /**
   * Log in with email and password.
   * Stores tokens automatically on success.
   */
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>('/auth/login', data, false);
    TokenStorage.setAccess(res.accessToken);
    TokenStorage.setRefresh(res.refreshToken);
    return res;
  },

  /**
   * Register a new user account.
   */
  signup: async (data: SignupRequest): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>('/auth/register', data, false);
    TokenStorage.setAccess(res.accessToken);
    TokenStorage.setRefresh(res.refreshToken);
    return res;
  },

  /**
   * Log out and clear stored tokens.
   */
  logout: async (): Promise<void> => {
    try {
      await api.post<void>('/auth/logout');
    } catch {
      // Best-effort: clear local tokens regardless
    } finally {
      TokenStorage.clear();
    }
  },

  /**
   * Send password reset email.
   */
  forgotPassword: async (email: string): Promise<ApiResponse<null>> =>
    api.post('/auth/forgot-password', { email }, false),

  /**
   * Reset password using token from email.
   */
  resetPassword: async (token: string, newPassword: string): Promise<ApiResponse<null>> =>
    api.post('/auth/reset-password', { token, newPassword }, false),

  /**
   * Verify email address using token.
   */
  verifyEmail: async (token: string): Promise<ApiResponse<null>> =>
    api.post('/auth/verify-email', { token }, false),

  /**
   * Google OAuth — exchange authorization code for tokens.
   */
  googleAuth: async (code: string): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>('/auth/google', { code }, false);
    TokenStorage.setAccess(res.accessToken);
    TokenStorage.setRefresh(res.refreshToken);
    return res;
  },
};
