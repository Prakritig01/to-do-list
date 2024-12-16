import React, { useContext } from "react";
import './TodoContainer.css'

import { useDispatch, useSelector } from "react-redux";
import { selectToDoFromList ,deleteTask,toggleStatus, setColor} from "./../../slices/todoListSlice";
import { selectFilteredTask,selectOptions,selectFilteredTasksByStatusAndColor } from "../../slices/filterSlice";

const TodoContainer = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(selectFilteredTasksByStatusAndColor);
  const options = selectOptions;

  // console.log("todoList",todoList);
  
  
  return (
    <div className="todo-container">
      {todoList.map((item) => (
        <div key={item.id}>
          <div className="content">
            <button className="toogle-status" onClick={()=> dispatch(toggleStatus(item.id))}>{item.completed ? "✔" : "X"}</button>
            <p>{item.task}</p>
            <select name="color-options" value={item.color} onChange={(e)=>dispatch(setColor({selectedColor: e.target.value, id :item.id}))}>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button className="delete-btn" onClick={()=> dispatch(deleteTask(item.id))}>Delete</button>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoContainer;
