import { useState } from "react";
import type { Task, TaskForm } from "./types";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Message from "@/components/common/Message";
import TasksList from "@/components/Task/TasksList";
import { validateTaskForm } from "@/validators/AddTaskValidator";

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<Partial<TaskForm>>({});

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleSubmit = () => {
    const newTask = { id: crypto.randomUUID(), title, onDelete: deleteTask };

    const validation = validateTaskForm(newTask);
    setError(validation);

    if (Object.keys(validation).length == 0) {
      setTasks((prev) => [...prev, newTask]);
    }
  };

  return (
    <div>
      <div>
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
      </div>
      <TasksList tasks={tasks} />
    </div>
  );
}

export default App;
