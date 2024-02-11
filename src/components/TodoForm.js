import React from 'react'
import Task from '../classes/Task';
import { useState } from 'react';
import { v4 } from 'uuid';

export const TodoForm = ({ value, setTaskName, setIsEditing, id, formType, tasks, setTasks }) => {

  const [inputValue, setInputValue] = useState(value);

  function onSubmit(e) {
    e.preventDefault();
    
    if (formType === 'add') {
      setTasks([...tasks, new Task(v4(true), inputValue)]);
      setInputValue('');

      console.log('Task adicionada com sucesso!');
    }

    else if (formType === 'edit') {

      setTaskName(inputValue);
      setInputValue('');
      setIsEditing(false);

      console.log('Task editada com sucesso!');
    }

    else {
      console.log('Tipo desconhecido de formulário.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="TodoForm">
      <input 
        type="text" 
        placeholder='What is the task today?' 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">{formType === 'add' ? 'Add Task' : 'Update Task'}</button>
    </form>
  )
}
