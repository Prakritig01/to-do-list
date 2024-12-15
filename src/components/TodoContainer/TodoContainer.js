import React, { useContext } from "react";

import { useSelector } from "react-redux";
import { selectToDoFromList } from "./../../slices/todoListSlice";

const TodoContainer = () => {
  const todoList = useSelector(selectToDoFromList);
  return (
    <div className="todo-container">
      {todoList.map((item) => (
        <div key={item.id}>
          <p>{item.task}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoContainer;
