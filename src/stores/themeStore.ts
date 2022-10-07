// import create from "zustand";

// interface State {
//   lightTheme: boolean;
//   setTheme: () => void;
// }

// const useThemeStore = create<State>((set) => ({
//   lightTheme: true,
//   setTheme: () => set((state) => ({ lightTheme: !state.lightTheme })),
// }));

// export default useThemeStore;

import create from "zustand";
import { persist } from "zustand/middleware";

interface State {
  theme: string;
  setLightTheme: () => void;
  setDarkTheme: () => void;
}

export const useThemeStore = create<State>()(
  persist(
    (set) => ({
      theme: "light",
      setLightTheme: () => set({ theme: "light" }),
      setDarkTheme: () => set({ theme: "dark" }),
    }),
    {
      name: "theme", // name of item in the storage (must be unique)
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);

export default useThemeStore;
