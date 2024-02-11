import React from 'react'
import Task from '../classes/Task';
import { useState } from 'react';
import { v4 } from 'uuid';

export const TodoForm = ({ value, tasks, setTasks }) => {

  const [inputValue, setInputValue] = useState(value);

  function onSubmit(e) {
    e.preventDefault();
    
    setTasks([...tasks, new Task(v4(true), inputValue)]);
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit} className="TodoForm">
      <input 
        type="text" 
        placeholder='What is the task today?' 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  )
}
