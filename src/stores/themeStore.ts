import create from "zustand";

interface State {
  lightTheme: boolean;
  setTheme: () => void;
}

const useThemeStore = create<State>((set) => ({
  lightTheme: true,
  setTheme: () => set((state) => ({ lightTheme: !state.lightTheme })),
}));

export default useThemeStore;
