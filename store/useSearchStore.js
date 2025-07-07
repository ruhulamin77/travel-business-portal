import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSearchStore = create(
  persist(
    (set) => ({
      searchPayload: {},
      selectedFlight: {},
      setSearchPayload: (payload) => set({ searchPayload: payload }),
      setSelectedFlight: (flight) => set({ selectedFlight: flight }),
    }),
    {
      name: 'search-storage',
    }
  )
);
