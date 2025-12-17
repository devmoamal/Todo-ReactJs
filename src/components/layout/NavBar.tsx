import { Sun, Moon } from "lucide-react";
import IconButton from "../common/IconButton";
import useDarkMode from "@/hooks/useDarkMode";
function NavBar() {
  const { theme, toggle } = useDarkMode();
  return (
    <nav className="flex justify-between p-2 items-center bg-primary">
      <p className="text-text">Task App</p>
      <IconButton Icon={theme == "dark" ? Moon : Sun} onClick={toggle} />
    </nav>
  );
}

export default NavBar;
