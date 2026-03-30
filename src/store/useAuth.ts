import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  fullName: string;
  role: 'admin' | 'user';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (fullName: string) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (fullName: string) => {
        const role = fullName.toLowerCase().includes('admin') ? 'admin' : 'user';
        set({
          user: { fullName, role },
          isAuthenticated: true,
        });
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
