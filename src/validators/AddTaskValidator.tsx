import type { TaskForm } from "@/types";

export const validateTaskForm = (task: TaskForm): Partial<TaskForm> => {
  const errors: Partial<TaskForm> = {};

  if (!task.id) {
    errors.id = "Error while generating id field";
  }

  if (!task.title) {
    errors.title = "Title is required";
  }

  return errors;
};
