import React, { useContext, useState } from "react";
import TodoContext from "../../context/todoContext";

const InputBox = () => {
    const { addTask } = useContext(TodoContext);
    const [singleValue, setSingleValue] = useState('');

    return (
        <div className="input">
            <input 
                type="text" 
                placeholder="What needs to be done?" 
                value={singleValue} 
                onChange={(e) => setSingleValue(e.target.value)} 
            />
            <button 
                onClick={() => {
                    addTask(singleValue); // Add the task
                    setSingleValue("");   // Clear the input field
                }}
            >
                Add Task
            </button>
        </div>
    );
};

export default InputBox;
