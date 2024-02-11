import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

export const TodoTask = ({id, value, tasks, setTasks}) => {
    
    const [taskName, setTaskName] = useState(value);

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

    return (
        <div className="TodoTask">
            <p>{taskName}</p>
            <div className="buttons">
                <button>
                    <AiFillEdit />
                </button>
                <button onClick={delTask}>
                    <AiFillDelete />
                </button>
            </div>
        </div>
    )
}