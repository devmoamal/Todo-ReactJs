import { TaskCard } from "@/components/Task/TaskCard";
import type { Task } from "@/types";

type TasksList = {
  tasks: Task[];
};

const TasksList = (props: TasksList) => {
  return (
    <div className="p-2 pr-32 space-y-1">
      {props.tasks.map((task: Task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          onDelete={task.onDelete}
        />
      ))}
    </div>
  );
};

export default TasksList;
