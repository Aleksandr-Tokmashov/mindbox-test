import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NewTaskForm } from './NewTaskForm';

describe('NewTaskForm', () => {
    test('кнопка отключена, когда input пуст', () => {
      render(<NewTaskForm addNewTask={jest.fn()} />);
      expect(screen.getByText('Add')).toBeDisabled();
    });
  
    test('кнопка включена, когда input не пуст', () => {
      render(<NewTaskForm addNewTask={jest.fn()} />);
      const input = screen.getByPlaceholderText('What needs to be done?');
      fireEvent.change(input, { target: { value: 'New task' } });
      expect(screen.getByText('Add')).not.toBeDisabled();
    });
  });