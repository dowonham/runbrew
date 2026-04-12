import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Run {
  id: string;
  km: number;
  ml: number;
  date: string;
}

interface MlStore {
  totalMl: number;
  totalKm: number;
  runCount: number;
  runs: Run[];
  addRun: (km: number) => void;
  reset: () => void;
}

const ML_PER_KM = 5;

export const useMlStore = create<MlStore>()(
  persist(
    (set) => ({
      totalMl: 0,
      totalKm: 0,
      runCount: 0,
      runs: [],
      addRun: (km: number) =>
        set((state) => {
          const ml = km * ML_PER_KM;
          const newRun = {
            id: Date.now().toString(),
            km,
            ml,
            date: new Date().toISOString(),
          };
          return {
            totalKm: +(state.totalKm + km).toFixed(2),
            totalMl: state.totalMl + ml,
            runCount: state.runCount + 1,
            runs: [newRun, ...state.runs],
          };
        }),
      reset: () =>
        set({ totalMl: 0, totalKm: 0, runCount: 0, runs: [] }),
    }),
    {
      name: 'runbrew-ml-storage',
    }
  )
);
