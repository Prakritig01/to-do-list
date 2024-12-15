import React from "react";
import InputBox from "../InputBox/InputBox";
import TodoContainer from "../TodoContainer/TodoContainer";
import FilterConatiner from "../FilterContainer/FilterCOnatiner";
import './DisplayBox.css';

const DisplayBox = () => {
  return (
    <div className="container">
      <InputBox/>
      <TodoContainer/>
      <FilterConatiner/>
    </div>
  );
};

export default DisplayBox;
