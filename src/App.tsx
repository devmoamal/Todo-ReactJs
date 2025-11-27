import { useState } from "react";
import { ToDoCard } from "@/components/TodoCard";
import XInput from "@/components/XInput";
import XButton from "./components/XButton";

type Task = {
  id: number;
  title: string;
};

function App() {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div>
      <div className="flex space-x-2 p-2">
        <XInput onChangeText={(text) => setTaskTitle(text)} />
        <XButton
          className="px-4"
          text="Add"
          onClick={() => {
            alert(taskTitle);
          }}
        />
      </div>

      {tasks.map((task) => (
        <ToDoCard key={task.id} title={task.title} />
      ))}
    </div>
  );
}

export default App;
