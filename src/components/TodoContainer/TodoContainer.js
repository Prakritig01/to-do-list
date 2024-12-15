import React, { useContext } from "react";
import './TodoContainer.css'

import { useDispatch, useSelector } from "react-redux";
import { selectToDoFromList ,deleteTask,toggleStatus} from "./../../slices/todoListSlice";

const TodoContainer = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(selectToDoFromList);
  
  
  return (
    <div className="todo-container">
      {todoList.map((item) => (
        <div key={item.id}>
          <div className="content">
            <button className="toogle-status" onClick={()=> dispatch(toggleStatus(item.id))}>{item.completed ? "✔" : "X"}</button>
            <p>{item.task}</p>
            <button className="delete-btn" onClick={()=> dispatch(deleteTask(item.id))}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoContainer;
