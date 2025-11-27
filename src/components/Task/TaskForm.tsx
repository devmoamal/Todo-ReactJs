import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Message from "@/components/common/Message";
type TaskFormProps = {};

const TaskForm: React.FC<TaskFormProps> = (props: TaskFormProps) => {
  return (
    <div className="space-y-1">
      <div className="flex space-x-2 p-2">
        <Input value={title} onChange={(_title) => setTitle(_title)} />
        <Button className="px-4" text="Add" onClick={handleSubmit} />
      </div>
      {error?.title && (
        <div>
          <Message message={error.title} type="error" />
        </div>
      )}
    </div>
  );
};

export default TaskForm;
