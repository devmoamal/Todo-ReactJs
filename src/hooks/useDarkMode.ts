import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

type Theme = "light" | "dark";

function useDarkMode() {
  // const { GetItem, SetItem } = useLocalStorage<Theme>();

  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  // const [theme, setTheme] = useState<Theme>("light");

  return { theme, setTheme };
}

export default useDarkMode;
