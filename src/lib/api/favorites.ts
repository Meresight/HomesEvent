import api from './client';
import type { Event, PaginatedResponse } from './types';

export const favoritesApi = {
  /**
   * Get all favorited events for the authenticated user.
   */
  getAll: (page = 1, limit = 20) =>
    api.get<PaginatedResponse<Event>>('/favorites', { page, limit }),

  /**
   * Add an event to favorites. Returns 201 Created.
   */
  add: (eventId: string) =>
    api.post<{ eventId: string; addedAt: string }>('/favorites', { eventId }),

  /**
   * Remove an event from favorites.
   */
  remove: (eventId: string) =>
    api.delete<void>(`/favorites/${eventId}`),

  /**
   * Check if a specific event is favorited by the current user.
   */
  isFavorited: (eventId: string) =>
    api.get<{ favorited: boolean }>(`/favorites/${eventId}/status`),
};
