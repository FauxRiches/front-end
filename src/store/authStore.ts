import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

type User = {
  id: string;
  name: string;
  token: string;
  refreshToken: string;
}

interface AuthState {
  user: User | null;
  isLoggedIn: () => boolean;
  login: (user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      isLoggedIn: () => {
        const state = useAuthStore.getState();
        return !!state.user;
      },

      login: (user) => {
        set(() => ({ user }))
      },

      logout: () => set(() => ({ user: null })),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => sessionStorage),
    },
  ) ,
);