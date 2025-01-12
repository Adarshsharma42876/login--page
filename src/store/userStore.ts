import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface UserState {
  user: string | null
  setUser: (user: string) => void
  clearUser: () => void
}

export const useUserStore = create<UserState>
persist(
  set => ({
    user: null,
    setUser: user => set({ user }),
    clearUser: () => set({ user: null }),
  }),
  {
    name: 'user-storage',
    getStorage: () => AsyncStorage,
  },
)
