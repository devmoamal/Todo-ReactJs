import TaskForm from "@/components/Task/TaskForm";
import TasksList from "@/components/Task/TasksList";
import { Separator } from "@/components/ui/separator";
import { taskSchema } from "@/schemas/task.schema";
import type { Task } from "@/types";
import { useState } from "react";

function TodoFeature() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleSubmit = () => {
    const newTask = { id: crypto.randomUUID(), title, onDelete: deleteTask };
    const validation = taskSchema.safeParse(newTask);

    if (validation.error) {
      setError(validation.error.issues[0].message);
      return;
    }

    setTasks([...tasks, newTask]);
    setTitle("");
    setError(undefined);
  };

  return (
    <div>
      <TaskForm
        title={title}
        setTitle={setTitle}
        onClick={handleSubmit}
        error={error}
      />
      <Separator />
      <TasksList tasks={tasks} />
    </div>
  );
}

export default TodoFeature;
