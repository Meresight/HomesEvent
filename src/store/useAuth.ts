import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TokenStorage } from '@/lib/api/client';

export type UserRole = 'admin' | 'organizer' | 'user';

export interface AuthUser {
  id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  avatar?: string;
  prcLicenseNumber?: string;
  organization?: string;
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // Actions
  setUser: (user: AuthUser, accessToken: string, refreshToken: string) => void;
  updateUser: (partial: Partial<AuthUser>) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;

  // Legacy mock login — REMOVE when API is wired
  login: (fullName: string) => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      /**
       * Called after a successful API login/signup.
       * Stores tokens in localStorage AND in cookies (for middleware).
       */
      setUser: (user, accessToken, refreshToken) => {
        // Persist tokens for API client
        TokenStorage.setAccess(accessToken);
        TokenStorage.setRefresh(refreshToken);

        // Set cookies so the MW can read server-side
        if (typeof document !== 'undefined') {
          document.cookie = `access_token=${accessToken}; path=/; max-age=900; SameSite=Lax`;
          document.cookie = `user_role=${user.role}; path=/; max-age=900; SameSite=Lax`;
        }

        set({ user, isAuthenticated: true });
      },

      /**
       * Update user profile data (e.g. after profile save).
       */
      updateUser: (partial) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...partial } : null,
        })),

      /**
       * Clear session on logout.
       */
      logout: () => {
        TokenStorage.clear();
        if (typeof document !== 'undefined') {
          document.cookie = 'access_token=; path=/; max-age=0';
          document.cookie = 'user_role=; path=/; max-age=0';
        }
        set({ user: null, isAuthenticated: false });
      },

      setLoading: (loading) => set({ isLoading: loading }),

      /**
       * @deprecated — MOCK ONLY. Replace with setUser() once API is wired.
       */
      login: (fullName: string) => {
        const role: UserRole = fullName.toLowerCase().includes('admin')
          ? 'admin'
          : 'user';
        const mockUser: AuthUser = {
          id: 'mock-001',
          fullName,
          firstName: fullName.split(' ')[0] || fullName,
          lastName: fullName.split(' ').slice(1).join(' ') || '',
          email: `${fullName.replace(/\s+/g, '.').toLowerCase()}@homes.ph`,
          role,
        };
        set({ user: mockUser, isAuthenticated: true });
        // Also set cookie for middleware
        if (typeof document !== 'undefined') {
          document.cookie = `user_role=${role}; path=/; max-age=3600; SameSite=Lax`;
          document.cookie = `access_token=mock-token; path=/; max-age=3600; SameSite=Lax`;
        }
      },
    }),
    {
      name: 'auth-storage',
      // Only persist the user object — tokens go to TokenStorage (localStorage directly)
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
