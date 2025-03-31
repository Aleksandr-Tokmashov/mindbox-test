import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tasks } from './Tasks';
import { TTask } from '../App/App';

describe('Tasks', () => {
    const mockTasks: TTask[] = [
      { id: '1', name: 'Task 1', isCompleted: false },
      { id: '2', name: 'Task 2', isCompleted: true }
    ];
  
    test('рендер списка задач', () => {
      render(<Tasks tasks={mockTasks} toggleTaskStatus={jest.fn()} />);
      expect(screen.getByText('Task 1')).toBeInTheDocument();
      expect(screen.getByText('Task 2')).toBeInTheDocument();
    });
  });