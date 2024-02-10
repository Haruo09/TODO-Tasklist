import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

export const TodoTask = ({id, value, tasks, setTasks}) => {
    
    const [taskName, setTaskName] = useState(value);

    const delTask = (id) => {
        if (tasks.length === 1) {
            setTasks([]);
        }
        else {
            setTasks([...tasks.slice(0, id), ...tasks.slice(id + 1)]);
        }

        console.log('elemento deletado!');
    }

    return (
        <div className="TodoTask">
            <p>{taskName}</p>
            <div className="buttons">
                <button>
                    <AiFillEdit />
                </button>
                <button onClick={() => delTask(id)}>
                    <AiFillDelete />
                </button>
            </div>
        </div>
    )
}
