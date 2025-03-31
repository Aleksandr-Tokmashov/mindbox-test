import { useState, useEffect } from "react";
import { NewTaskForm } from "../NewTaskForm/NewTaskForm";
import { Tasks } from "../Tasks/Tasks";
import { TodoFooter } from "../TodoFooter/TodoFooter";
import "./App.css";

export type TTask = {
  name: string;
  id: string;
  isCompleted: boolean;
};

function App() {
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [currentFilter, setCurrentFilter] = useState<
    "all" | "active" | "completed"
  >("all");
  const [currentTasks, setCurrentTasks] = useState<TTask[]>([]);

  useEffect(() => {
    switch (currentFilter) {
      case "all":
        setCurrentTasks(tasks);
        break;
      case "active":
        setCurrentTasks(tasks.filter((task) => !task.isCompleted));
        break;
      case "completed":
        setCurrentTasks(tasks.filter((task) => task.isCompleted));
        break;
    }
  }, [tasks, currentFilter]);

  function addNewTask(task: TTask) {
    setTasks([...tasks, task]);
  }

  function toggleTaskStatus(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  function clearCompletedTasks() {
    setTasks(tasks.filter((task) => !task.isCompleted));
  }

  return (
    <div className="todo-app">
      <h1 className="app-title">todos</h1>
      <div className="todo-container">
        <NewTaskForm addNewTask={addNewTask} />
        <Tasks tasks={currentTasks} toggleTaskStatus={toggleTaskStatus} />
        <TodoFooter
          tasks={tasks}
          setCurrentFilter={setCurrentFilter}
          currentFilter={currentFilter}
          clearCompleted={clearCompletedTasks}
        />
      </div>
    </div>
  );
}

export default App;
