import { FC } from "react";
import { TTask } from "../App/App";
import './Tasks.css';

interface TasksProps {
  tasks: TTask[];
  toggleTaskStatus: (id: string) => void;
}

export const Tasks: FC<TasksProps> = ({ tasks, toggleTaskStatus }) => {
  return (
    <ul className="tasks-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task-item ${task.isCompleted ? 'completed' : ''}`}
          onClick={() => toggleTaskStatus(task.id)}
        >
          <div className="task-checkbox">
            {task.isCompleted ? (
              <span className="completed-icon">✓</span>
            ) : (
              <span className="empty-circle">○</span>
            )}
          </div>
          <span className="task-text">{task.name}</span>
        </li>
      ))}
    </ul>
  );
};