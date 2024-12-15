import React, { useContext, useState } from "react";
import TodoContext from "../../context/todoContext";
import { useDispatch } from "react-redux";
import { addTask } from "../../slices/todoListSlice";

const InputBox = () => {
    const [singleTask, setSingleTask] = useState('');
    const dispatch = useDispatch();

    const handleKeyDown = (e) =>{
        if(e.key === 'Enter' && singleTask.trim() != ""){
            dispatch(addTask(singleTask)); 
            setSingleTask(""); 
        }
    }

    return (
        <div className="input">
            <input 
                type="text" 
                placeholder="What needs to be done?" 
                value={singleTask} 
                onChange={(e) => setSingleTask(e.target.value)} 
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default InputBox;
