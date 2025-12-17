import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { cn } from "@/lib/utils";
import ErrorMessage from "../ErrorMessage";

type TaskFormProps = {
  title: string;
  setTitle: (title: string) => void;
  onClick: () => void;
  error?: string;

  className?: string;
};

const TaskForm = ({
  title,
  setTitle,
  onClick,
  error,

  className,
}: TaskFormProps) => {
  return (
    <div className={cn("p-2", className)}>
      <div className="flex gap-2">
        <Input
          className="p-6 px-2 text-2xl!"
          placeholder="Type anything ..."
          value={title}
          onChange={setTitle}
        />
        <Button className="p-6 px-2 text-2xl!" onClick={onClick}>
          Create Task
        </Button>
      </div>
      <ErrorMessage message={error} />
    </div>
  );
};

export default TaskForm;
