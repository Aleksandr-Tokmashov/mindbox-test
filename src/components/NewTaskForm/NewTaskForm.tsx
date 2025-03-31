import { ChangeEvent, useState, FC, useEffect, FormEvent } from "react";
import { TTask } from "../App/App";
import './NewTaskForm.css';

interface NewTaskFormProps {
  addNewTask: (task: TTask) => void;
}

export const NewTaskForm: FC<NewTaskFormProps> = ({ addNewTask }) => {
  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(inputValue.length === 0);
  }, [inputValue]);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const task: TTask = {
      name: inputValue,
      isCompleted: false,
      id: Math.random().toString(36).substring(2, 9),
    };
    addNewTask(task);
    setInputValue("");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        className="new-task-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="What needs to be done?"
      />
      <button 
        className="add-task-button" 
        type="submit" 
        disabled={isDisabled}
      >
        Add
      </button>
    </form>
  );
};