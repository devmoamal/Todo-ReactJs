import type { Task } from "@/types";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import IconButton from "../common/IconButton";
import { Trash } from "lucide-react";

type TaskCardProps = {
  task: Task;

  className?: string;
};

export const TaskCard = ({ task, className }: TaskCardProps) => {
  return (
    <Card className={cn("flex flex-row p-2 justify-between", className)}>
      <p className="text-lg">{task.title}</p>
      <IconButton Icon={Trash} onClick={() => task.onDelete(task.id)} />
    </Card>
  );
};
