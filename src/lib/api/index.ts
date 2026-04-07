// ─── Central API Index ────────────────────────────────────────────────────────
// Import all API modules from one place:
//   import { eventsApi, authApi, registrationsApi } from '@/lib/api';

export { authApi } from './auth';
export { eventsApi } from './events';
export { registrationsApi } from './registrations';
export { usersApi } from './users';
export { cpdApi } from './cpd';
export { notificationsApi } from './notifications';
export { adminApi } from './admin';
export { favoritesApi } from './favorites';
export { api as apiClient, TokenStorage, ApiException } from './client';
export type * from './types';
