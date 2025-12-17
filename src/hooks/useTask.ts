import useTasksStore from "@/stores/TasksStore";

function useTask() {
  const tasks = useTasksStore((state) => state.tasks);
  const addTask = useTasksStore((state) => state.addTask);
  const toggleTask = useTasksStore((state) => state.toggleTask);
  const deleteTask = useTasksStore((state) => state.deleteTask);

  return { tasks, addTask, toggleTask, deleteTask };
}

export default useTask;
