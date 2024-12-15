import React from 'react';
import { useSelector } from 'react-redux';
import { selectIncompleteTaskCount } from '../../slices/todoListSlice';


const RemainingToDos = () => {
    const count = useSelector(selectIncompleteTaskCount);
  return (
    <div>
      <h2>Remaining ToDos</h2>
      <p>{count}</p>
    </div>
  )
}

export default RemainingToDos;
