import api from './client';
import type {
  Event,
  CreateEventRequest,
  EventFilters,
  PaginatedResponse,
  ApiResponse,
  Registration,
  EventFeedback,
  SubmitFeedbackRequest,
} from './types';

export const eventsApi = {
  // ─── Public ─────────────────────────────────────────────────────────────

  /**
   * Get paginated list of published events with optional filters.
   */
  getAll: (filters?: EventFilters) =>
    api.get<PaginatedResponse<Event>>('/events', filters as Record<string, string | number | boolean | undefined | null>, false),

  /**
   * Get a single event by ID.
   */
  getById: (id: string) =>
    api.get<Event>(`/events/${id}`, undefined, false),

  /**
   * Get featured/highlighted events for the landing page.
   */
  getFeatured: () =>
    api.get<Event[]>('/events/featured', undefined, false),

  /**
   * Get events near a given location (city or coordinates).
   */
  getNearby: (city: string) =>
    api.get<Event[]>('/events/nearby', { city }, false),

  // ─── Organizer ──────────────────────────────────────────────────────────

  /**
   * Get events created by the authenticated user (organizer dashboard).
   */
  getMyEvents: (filters?: Partial<EventFilters>) =>
    api.get<PaginatedResponse<Event>>('/events/my-events', filters as Record<string, string | number | boolean | undefined | null>),

  /**
   * Create a new event draft.
   */
  create: (data: CreateEventRequest) =>
    api.post<Event>('/events', data),

  /**
   * Update an existing event.
   */
  update: (id: string, data: Partial<CreateEventRequest>) =>
    api.patch<Event>(`/events/${id}`, data),

  /**
   * Publish a draft event (makes it publicly visible).
   */
  publish: (id: string) =>
    api.patch<Event>(`/events/${id}/publish`),

  /**
   * Cancel a published event.
   */
  cancel: (id: string, reason?: string) =>
    api.patch<Event>(`/events/${id}/cancel`, { reason }),

  /**
   * Delete a draft event.
   */
  delete: (id: string) =>
    api.delete<ApiResponse<null>>(`/events/${id}`),

  /**
   * Upload event cover image. Returns the image URL.
   */
  uploadImage: async (id: string, file: File): Promise<{ url: string }> => {
    const formData = new FormData();
    formData.append('image', file);
    const token = (await import('./client')).TokenStorage.getAccess();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || 'https://api.homes.ph/v1'}/events/${id}/image`,
      {
        method: 'POST',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: formData,
      }
    );
    if (!res.ok) throw new Error('Image upload failed');
    return res.json();
  },

  // ─── Registrations (scoped to event) ────────────────────────────────────

  /**
   * Get all registrations for a specific event (organizer only).
   */
  getRegistrations: (eventId: string, page = 1, limit = 50) =>
    api.get<PaginatedResponse<Registration>>(`/events/${eventId}/registrations`, { page, limit }),

  /**
   * Export registrations as CSV (returns download URL).
   */
  exportRegistrations: (eventId: string) =>
    api.get<{ downloadUrl: string }>(`/events/${eventId}/registrations/export`),

  /**
   * Send announcement to all registrants of an event.
   */
  sendAnnouncement: (eventId: string, subject: string, message: string) =>
    api.post<ApiResponse<null>>(`/events/${eventId}/announce`, { subject, message }),

  // ─── Feedback ────────────────────────────────────────────────────────────

  /**
   * Submit feedback/rating for an attended event.
   */
  submitFeedback: (eventId: string, data: SubmitFeedbackRequest) =>
    api.post<EventFeedback>(`/events/${eventId}/feedback`, data),

  /**
   * Get aggregated feedback summary for an event (organizer).
   */
  getFeedbackSummary: (eventId: string) =>
    api.get<{ averageRating: number; totalResponses: number; breakdown: Record<string, number> }>(
      `/events/${eventId}/feedback/summary`
    ),

  // ─── Check-In ────────────────────────────────────────────────────────────

  /**
   * Check in an attendee via ticket code or QR.
   */
  checkIn: (eventId: string, ticketCode: string) =>
    api.post<{ success: boolean; message: string; attendeeName: string }>(
      `/events/${eventId}/check-in`,
      { ticketCode }
    ),
};
