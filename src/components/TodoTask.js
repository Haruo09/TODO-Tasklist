import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

export const TodoTask = ({value}) => {
    const [taskName, setTaskName] = useState(value);

    return (
        <div className="TodoTask">
            <p>{taskName}</p>
            <div className="buttons">
                <button>
                    <AiFillDelete />
                </button>
                <button>
                    <AiFillEdit />
                </button>
            </div>
        </div>
    )
}
