import type { Task } from "@/types";
import Button from "../common/Button";

export const TaskCard = (task: Task) => {
  return (
    <div className="flex space-x-2">
      <p className="border w-full p-2">{task.title}</p>
      <Button text="X" onClick={() => task.onDelete(task.id)} />
    </div>
  );
};
