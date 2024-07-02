import { create } from 'zustand';

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

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  isLoggedIn: () => {
    const state = useAuthStore.getState();
    return !!state.user;
  },

  login: (user) => {
    set(() => ({ user }))
  },

  logout: () => set(() => ({ user: null })),
}));