import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserState {
  user: object | null;
  setUser: (user: object) => void;
  clearUser: () => void;
}

// Create the store with Zustand and persist middleware
export const useUserStore = create<UserState>()(set => ({
  user: null,
  setUser: user => set({ user }),
  clearUser: () => set({ user: null }),
}));
