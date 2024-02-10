import React from 'react'
import { TodoTask } from './TodoTask'

export const TodoTasks = ({ tasks, setTasks }) => {
  
  return (
    <div>
      {tasks.map((task) => {
        return <TodoTask 
          key={task.getId()} 
          id={task.getId()} 
          value={task.getTaskName()} 
          tasks={tasks} 
          setTasks={setTasks} 
        />
    })}
    </div>
  )

}
