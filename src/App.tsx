import { useState } from "react";
import { ToDoCard } from "@/components/TodoCard";

function App() {
  const [count, setCount] = useState(0);

  // make dummies
  const dummyTasks = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
  ];

  return (
    <div>
      {dummyTasks.map((task) => (
        <ToDoCard key={task.id} title={task.title} />
      ))}
    </div>
  );
}


export default App;
