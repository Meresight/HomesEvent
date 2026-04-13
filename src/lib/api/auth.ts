import api from './client';
import { TokenStorage } from './client';
import type { AuthResponse, LoginRequest, SignupRequest, ApiResponse } from './types';

const mockDelay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

export const authApi = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    await mockDelay(800);
    const mockToken = "mock_access_token_123";
    const mockRefresh = "mock_refresh_token_456";
    TokenStorage.setAccess(mockToken);
    TokenStorage.setRefresh(mockRefresh);

    let simulatedRole = "organizer";
    let name = "Test Organizer";

    // Allow testing different roles based on the email inputted
    if (data.email.toLowerCase().includes("admin")) {
      simulatedRole = "admin";
      name = "Homes Admin";
    } else if (data.email.toLowerCase().includes("user")) {
      simulatedRole = "user";
      name = "Standard User";
    }

    return {
      accessToken: mockToken,
      refreshToken: mockRefresh,
      user: {
        id: "u1",
        email: data.email,
        name: name,
        role: simulatedRole as any,
        createdAt: new Date().toISOString()
      }
    };
  },

  signup: async (data: SignupRequest): Promise<AuthResponse> => {
    await mockDelay(1000);
    const mockToken = "mock_access_token_123";
    const mockRefresh = "mock_refresh_token_456";
    TokenStorage.setAccess(mockToken);
    TokenStorage.setRefresh(mockRefresh);
    return {
      accessToken: mockToken,
      refreshToken: mockRefresh,
      user: {
        id: "u1",
        email: data.email,
        name: data.firstName + " " + data.lastName,
        role: "user",
        createdAt: new Date().toISOString()
      }
    };
  },

  logout: async (): Promise<void> => {
    await mockDelay(300);
    TokenStorage.clear();
  },

  forgotPassword: async (email: string): Promise<ApiResponse<null>> => {
    await mockDelay();
    return { message: "Reset link sent to your email." } as any;
  },

  resetPassword: async (token: string, newPassword: string): Promise<ApiResponse<null>> => {
    await mockDelay();
    return { message: "Password successfully reset." } as any;
  },

  verifyEmail: async (token: string): Promise<ApiResponse<null>> => {
    await mockDelay();
    return { message: "Email verified." } as any;
  },

  googleAuth: async (code: string): Promise<AuthResponse> => {
    await mockDelay(800);
    const mockToken = "mock_access_token_123";
    const mockRefresh = "mock_refresh_token_456";
    TokenStorage.setAccess(mockToken);
    TokenStorage.setRefresh(mockRefresh);
    return {
      accessToken: mockToken,
      refreshToken: mockRefresh,
      user: {
        id: "u1",
        email: "google@user.com",
        name: "Google User",
        role: "user",
        createdAt: new Date().toISOString()
      }
    };
  },
};
