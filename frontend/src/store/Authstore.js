import create from 'zustand';

const useAuthStore = create((set) => ({
  authenticated: false,
  setAuthenticated: (value) => set(() => ({ authenticated: value })),
}));

export default useAuthStore;