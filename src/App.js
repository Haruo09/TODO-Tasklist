import React, { useState } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoTasks } from './components/TodoTasks';

function App() {

  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <h1>Get Things Ready!</h1>
      <TodoForm tasks={tasks} setTasks={setTasks} />
      <TodoTasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
