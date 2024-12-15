import React from 'react';
import './ActionsComponent.css'
import { useDispatch } from 'react-redux';
import { markAllCompleted,clearCompleted } from '../../slices/todoListSlice';

const ActionsComponent = () => {
    const dispatch = useDispatch();
  return (
    <div className='filter-by-actions'>
        <h2>Actions</h2>
      <button className='mark-all-completed' onClick={() => dispatch(markAllCompleted())}>Mark All Completed</button>
      <button className='mark-all-incompleted' onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
    </div>
  )
}

export default ActionsComponent
