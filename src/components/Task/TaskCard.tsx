import type { Task } from "@/types";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import IconButton from "../common/IconButton";
import { Trash, CircleCheck } from "lucide-react";
import useTask from "@/hooks/useTask";

type TaskCardProps = {
  task: Task;

  className?: string;
};

export const TaskCard = ({ task, className }: TaskCardProps) => {
  const { deleteTask, toggleTask } = useTask();

  const unCompletedTask = (
    <Card
      className={cn(
        "flex flex-row p-2 justify-between items-center ",
        className
      )}
    >
      <p className="text-text text-lg">{task.title}</p>
      <IconButton Icon={CircleCheck} onClick={() => toggleTask(task.id)} />
    </Card>
  );

  const completedTask = (
    <Card
      className={cn(
        "flex flex-row p-2 justify-between items-center bg-primary-foreground border-primary opacity-60",
        className
      )}
    >
      <p className="text-text text-lg">{task.title}</p>
      <IconButton Icon={Trash} onClick={() => deleteTask(task.id)} />
    </Card>
  );

  return task.complete ? completedTask : unCompletedTask;
};
