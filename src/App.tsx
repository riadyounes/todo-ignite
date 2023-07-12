import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks";
import "./global.css";

import { useState } from "react";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: "1", title: "Task 1", isCompleted: false },
    { id: "2", title: "Task 2", isCompleted: true },
  ]);

  function handleCreateNewTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function handleDeleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  function toggleTaskCompleted(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <div>
      <Header onAddTask={handleCreateNewTask} />
      <Tasks
        tasks={tasks}
        onDelete={handleDeleteTask}
        onComplete={toggleTaskCompleted}
      />
    </div>
  );
}

export default App;
