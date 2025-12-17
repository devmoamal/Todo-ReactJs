import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Theme } from "@/types";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggle: () => void;
};

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "light",

      setTheme: (theme) => set({ theme }),

      toggle: () =>
        set((state) => ({
          theme: state.theme === "dark" ? "light" : "dark",
        })),
    }),
    {
      name: "theme",
    }
  )
);

export default useThemeStore;
