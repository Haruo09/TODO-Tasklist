import React from 'react'

export const TodoForm = ({ value, onInputChange}) => {
  return (
    <form action="" className="TodoForm">
        <input type="text" placeholder='What is the task today?' value={value} onChange={(e)=> onInputChange(e)}/>
        <button type="submit">Add Task</button>
    </form>
  )
}
