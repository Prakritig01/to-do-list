import React from "react";
import InputBox from "../InputBox/InputBox";
import TodoContainer from "../TodoContainer/TodoContainer";

const DisplayBox = () => {
  return (
    <div className="container">
      <InputBox/>
      <TodoContainer/>
    </div>
  );
};

export default DisplayBox;
