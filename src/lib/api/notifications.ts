import api from './client';
import type { Notification, ApiResponse } from './types';

export const notificationsApi = {
  /**
   * Get all notifications for the authenticated user.
   */
  getAll: (page = 1, limit = 20) =>
    api.get<{ data: Notification[]; unreadCount: number; total: number }>(
      '/notifications',
      { page, limit }
    ),

  /**
   * Mark a single notification as read.
   */
  markRead: (id: string) =>
    api.patch<ApiResponse<null>>(`/notifications/${id}/read`),

  /**
   * Mark ALL notifications as read.
   */
  markAllRead: () =>
    api.patch<ApiResponse<null>>('/notifications/read-all'),

  /**
   * Delete a notification.
   */
  delete: (id: string) =>
    api.delete<ApiResponse<null>>(`/notifications/${id}`),

  /**
   * Get unread count (for the badge in the topbar).
   */
  getUnreadCount: () =>
    api.get<{ count: number }>('/notifications/unread-count'),
};
