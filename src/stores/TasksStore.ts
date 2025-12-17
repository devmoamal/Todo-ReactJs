import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Task } from "@/types";

type TasksStats = {
  tasks: Task[];
};

type TaskActions = {
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

type TasksStore = TasksStats & TaskActions;

const useTasksStore = create<TasksStore>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (title) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: crypto.randomUUID(),
              title,
              complete: false,
            },
          ],
        })),
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) => {
            return task.id == id ? { ...task, complete: !task.complete } : task;
          }),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
    }),
    {
      name: "tasks",
    }
  )
);

export default useTasksStore;
