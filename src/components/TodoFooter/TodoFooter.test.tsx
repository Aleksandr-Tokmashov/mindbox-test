import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoFooter } from './TodoFooter';
import { TTask } from '../App/App';

describe('TodoFooter', () => {
  const mockTasksWithCompleted: TTask[] = [
    { id: '1', name: 'Task 1', isCompleted: false },
    { id: '2', name: 'Task 2', isCompleted: true } 
  ];

  const mockTasksWithoutCompleted: TTask[] = [
    { id: '1', name: 'Task 1', isCompleted: false },
    { id: '2', name: 'Task 2', isCompleted: false } 
  ];

  const setup = (tasks: TTask[], filter: 'all' | 'active' | 'completed') => {
    return render(
      <TodoFooter 
        tasks={tasks}
        currentFilter={filter}
        setCurrentFilter={jest.fn()}
        clearCompleted={jest.fn()}
      />
    );
  };

  test('Кнопка "Clear completed" активна когда есть выполненные задачи', () => {
    setup(mockTasksWithCompleted, 'all');
    expect(screen.getByText('Clear completed')).not.toBeDisabled();
  });

  test('Кнопка "Clear completed" отключена когда нет выполненных задач', () => {
    setup(mockTasksWithoutCompleted, 'all');
    expect(screen.getByText('Clear completed')).toBeDisabled();
  });
});