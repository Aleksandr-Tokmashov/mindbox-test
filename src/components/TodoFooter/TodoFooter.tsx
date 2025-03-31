import { FC } from "react";
import { TTask } from "../App/App";
import './TodoFooter.css';

interface TodoFooterProps {
  setCurrentFilter: (filter: 'all' | 'active' | 'completed') => void,
  tasks: TTask[],
  currentFilter: 'all' | 'active' | 'completed',
  clearCompleted: () => void,
}

export const TodoFooter: FC<TodoFooterProps> = ({ 
  tasks, 
  setCurrentFilter,
  currentFilter,
  clearCompleted
}) => {
  const completedTasks = tasks.filter(task => task.isCompleted);
  const activeTasks = tasks.filter(task => !task.isCompleted);
  
  return (
    <div className="todo-footer">
        <div className="items-left">
            <p>{`${activeTasks.length} items left`}</p>
        </div>
        <div className="filter-buttons">
            <button 
              onClick={() => setCurrentFilter('all')}
              className={currentFilter === 'all' ? 'active' : ''}
            >
              All
            </button>
            <button 
              onClick={() => setCurrentFilter('active')}
              className={currentFilter === 'active' ? 'active' : ''}
            >
              Active
            </button>
            <button 
              onClick={() => setCurrentFilter('completed')}
              className={currentFilter === 'completed' ? 'active' : ''}
            >
              Completed
            </button>
        </div>
        <button 
          className="clear-completed" 
          onClick={clearCompleted} 
          disabled={completedTasks.length === 0}
        >
          Clear completed
        </button>
    </div>
  );
};