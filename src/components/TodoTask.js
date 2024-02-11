import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { TodoForm } from './TodoForm';

export const TodoTask = ({id, value, tasks, setTasks}) => {
    
    const [taskName, setTaskName] = useState(value);
    const [isEditing, setIsEditing] = useState(false);

    const delTask = () => {
        if (tasks.length === 1) {
            setTasks([]);
        }

        else {
            setTasks(tasks.filter(task => task.getId() !== id));
        }
        
        console.log('elemento deletado!');
        console.log(tasks);
    }

    if (!isEditing) {
        return (
            <div className="TodoTask">
                <p>{taskName}</p>
                <div className="buttons">
                    <button onClick={() => setIsEditing(true)}>
                        <AiFillEdit />
                    </button>
                    <button onClick={delTask}>
                        <AiFillDelete />
                    </button>
                </div>
            </div>
        )
    }

    else {
        return (
            <TodoForm 
                id={id}
                value={taskName}
                formType={'edit'}
                setTaskName={setTaskName}
                setIsEditing={setIsEditing}
            />
        )
    }
    
}