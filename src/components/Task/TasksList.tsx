import { TaskCard } from "@/components/Task/TaskCard";
import type { Task } from "@/types";

type TasksList = {
  tasks: Task[];
};

const TasksList = ({ tasks }: TasksList) => {
  return (
    <div className="mt-2 mx-1 p-2 space-y-3">
      {tasks.map((task: Task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TasksList;
