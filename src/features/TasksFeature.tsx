import TaskForm from "@/components/Task/TaskForm";
import TasksList from "@/components/Task/TasksList";
import { Separator } from "@/components/ui/separator";
import useTask from "@/hooks/useTask";
import { cn } from "@/lib/utils";
import { taskSchema } from "@/schemas/task.schema";
import { useState } from "react";

type TasksFeatureProps = {
  className?: string;
};

function TasksFeature({ className }: TasksFeatureProps) {
  const { tasks, addTask } = useTask();
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);

  const handleSubmit = () => {
    const validation = taskSchema.safeParse({ title });

    if (validation.error) {
      setError(validation.error.issues[0].message);
      return;
    }

    addTask(title);
    setTitle("");
    setError(undefined);
  };

  return (
    <div className={cn("", className)}>
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

export default TasksFeature;
