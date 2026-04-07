import api from './client';
import type { CPDRecord, PaginatedResponse } from './types';

export const cpdApi = {
  /**
   * Get all CPD records for the authenticated user.
   */
  getMyRecords: (page = 1, limit = 20) =>
    api.get<PaginatedResponse<CPDRecord>>('/cpd/me', { page, limit }),

  /**
   * Get CPD summary — total hours, breakdown by year, etc.
   */
  getSummary: () =>
    api.get<{
      totalHours: number;
      requiredHours: number;
      recordsByYear: Record<string, number>;
      nextRenewalDate: string;
    }>('/cpd/me/summary'),

  /**
   * Get a specific CPD certificate (returns download URL).
   */
  getCertificate: (recordId: string) =>
    api.get<{ downloadUrl: string; fileName: string }>(`/cpd/${recordId}/certificate`),
};
