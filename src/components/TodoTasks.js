import React from 'react'
import { TodoTask } from './TodoTask'

export const TodoTasks = ({ tasks }) => {

  console.log(tasks);
  
  return (
    <div>
      {tasks.map((task) => (
        <TodoTask key={task.id} value={task.taskName} />
      ))}
    </div>
  )
}
