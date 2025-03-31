import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  test('Отображение app', () => {
    render(<App />);
    expect(screen.getByText('todos')).toBeInTheDocument();
  });

  test('Добавление новой задачи', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'New task' } });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('New task')).toBeInTheDocument();
  });

  test('Переключение статуса задачи', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'New task' } });
    fireEvent.click(screen.getByText('Add'));
    const taskItem = screen.getByText('New task').closest('li');
    
    fireEvent.click(taskItem);
    expect(taskItem).toHaveClass('completed');
  });
});