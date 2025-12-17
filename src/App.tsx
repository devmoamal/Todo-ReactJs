import NavBar from "./components/layout/NavBar";
import StatsFeature from "./features/StatsFeature";
import TasksFeature from "./features/TasksFeature";
import { cn } from "./lib/utils";
import useThemeStore from "./stores/ThemeStore";

function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      className={cn(
        "min-h-screen bg-background",
        theme == "dark" ? "dark" : "light"
      )}
    >
      <NavBar />
      <StatsFeature />
      <TasksFeature />
    </div>
  );
}

export default App;
