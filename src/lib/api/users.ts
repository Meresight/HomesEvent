import api from './client';
import type { User, UpdateProfileRequest, ApiResponse } from './types';

export const usersApi = {
  /**
   * Get the authenticated user's profile.
   */
  getProfile: () => api.get<User>('/users/me'),

  /**
   * Update profile fields.
   */
  updateProfile: (data: UpdateProfileRequest) =>
    api.patch<User>('/users/me', data),

  /**
   * Upload avatar photo. Returns the new avatar URL.
   */
  uploadAvatar: async (file: File): Promise<{ avatarUrl: string }> => {
    const formData = new FormData();
    formData.append('avatar', file);
    const { TokenStorage } = await import('./client');
    const token = TokenStorage.getAccess();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || 'https://api.homes.ph/v1'}/users/me/avatar`,
      {
        method: 'POST',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: formData,
      }
    );
    if (!res.ok) throw new Error('Avatar upload failed');
    return res.json();
  },

  /**
   * Change password.
   */
  changePassword: (currentPassword: string, newPassword: string) =>
    api.post<ApiResponse<null>>('/users/me/password', { currentPassword, newPassword }),

  /**
   * Get notification preferences.
   */
  getNotificationPreferences: () =>
    api.get<{
      emailEvents: boolean;
      emailRegistrations: boolean;
      emailReminders: boolean;
      pushEnabled: boolean;
    }>('/users/me/notification-preferences'),

  /**
   * Update notification preferences.
   */
  updateNotificationPreferences: (prefs: Record<string, boolean>) =>
    api.patch<ApiResponse<null>>('/users/me/notification-preferences', prefs),

  /**
   * Delete own account.
   */
  deleteAccount: (password: string) =>
    api.post<ApiResponse<null>>('/users/me/delete', { password }),
};
