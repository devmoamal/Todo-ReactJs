import { TaskCard } from "@/components/Task/TaskCard";
import type { Task } from "@/types";

type TasksList = {
  tasks: Task[];
};

const TasksList = ({ tasks }: TasksList) => {
  return (
    <div className="p-2 space-y-2.5">
      {tasks
        .slice()
        .reverse()
        .map((task: Task) => (
          <TaskCard className="border-border" task={task} key={task.id} />
        ))}
    </div>
  );
};

export default TasksList;
