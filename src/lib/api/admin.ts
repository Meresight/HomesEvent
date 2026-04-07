import api from './client';
import type { AdminStats, EventApproval, PaginatedResponse, User, Event } from './types';

export const adminApi = {
  /**
   * Dashboard stats.
   */
  getStats: () => api.get<AdminStats>('/admin/stats'),

  /**
   * Get all users (paginated, searchable).
   */
  getUsers: (params?: { search?: string; role?: string; page?: number; limit?: number }) =>
    api.get<PaginatedResponse<User>>('/admin/users', params as Record<string, string | number | boolean | undefined | null>),

  /**
   * Update a user's role.
   */
  updateUserRole: (userId: string, role: 'admin' | 'organizer' | 'user') =>
    api.patch<User>(`/admin/users/${userId}/role`, { role }),

  /**
   * Suspend/ban a user account.
   */
  suspendUser: (userId: string, reason: string) =>
    api.patch<User>(`/admin/users/${userId}/suspend`, { reason }),

  /**
   * Get all events pending approval.
   */
  getPendingApprovals: () =>
    api.get<EventApproval[]>('/admin/event-approvals'),

  /**
   * Approve an event.
   */
  approveEvent: (eventId: string) =>
    api.patch<EventApproval>(`/admin/event-approvals/${eventId}/approve`),

  /**
   * Reject an event with a note to the organizer.
   */
  rejectEvent: (eventId: string, note: string) =>
    api.patch<EventApproval>(`/admin/event-approvals/${eventId}/reject`, { note }),

  /**
   * Get platform-wide revenue reports.
   */
  getRevenueReport: (params: { from: string; to: string; groupBy?: 'day' | 'week' | 'month' }) =>
    api.get<{ labels: string[]; revenue: number[]; registrations: number[] }>(
      '/admin/reports/revenue',
      params
    ),

  /**
   * Get all events (admin view — includes drafts, cancelled).
   */
  getAllEvents: (params?: { search?: string; status?: string; page?: number }) =>
    api.get<PaginatedResponse<Event>>('/admin/events', params as Record<string, string | number | boolean | undefined | null>),

  /**
   * Broadcast an announcement to all users.
   */
  broadcastAnnouncement: (title: string, message: string) =>
    api.post<{ sent: number }>('/admin/announcements', { title, message }),
};
