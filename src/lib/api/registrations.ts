import api from './client';
import type {
  Registration,
  CreateRegistrationRequest,
  PaginatedResponse,
  ApiResponse,
} from './types';

export const registrationsApi = {
  /**
   * Register for an event. Returns the new registration + ticket details.
   */
  create: (data: CreateRegistrationRequest) =>
    api.post<Registration>('/registrations', data),

  /**
   * Get all registrations for the authenticated user.
   */
  getMyRegistrations: (page = 1, limit = 20) =>
    api.get<PaginatedResponse<Registration>>('/registrations/me', { page, limit }),

  /**
   * Get a specific registration by ID.
   */
  getById: (id: string) =>
    api.get<Registration>(`/registrations/${id}`),

  /**
   * Cancel a registration (subject to cancellation policy).
   */
  cancel: (id: string) =>
    api.patch<Registration>(`/registrations/${id}/cancel`),

  /**
   * Get the QR code for a ticket (base64 image).
   */
  getQRCode: (id: string) =>
    api.get<{ qrCode: string; ticketCode: string }>(`/registrations/${id}/qr`),

  /**
   * Get the downloadable ticket PDF URL.
   */
  getTicketDownload: (id: string) =>
    api.get<{ downloadUrl: string }>(`/registrations/${id}/ticket`),

  /**
   * Initiate payment for a pending registration.
   * Returns payment gateway redirect URL.
   */
  initiatePayment: (id: string, paymentMethod: 'GCash' | 'Maya' | 'Credit') =>
    api.post<{ paymentUrl: string; transactionId: string }>(
      `/registrations/${id}/pay`,
      { paymentMethod }
    ),

  /**
   * Verify payment status (called after redirect from payment gateway).
   */
  verifyPayment: (transactionId: string) =>
    api.get<{ status: 'Paid' | 'Pending' | 'Failed'; registration?: Registration }>(
      `/registrations/payment/verify`,
      { transactionId }
    ),
};
