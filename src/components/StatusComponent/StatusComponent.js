import React from 'react'
import './StatusComponent.css'
import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../slices/filterSlice';


const StatusComponent = () => {
  const dispatch = useDispatch();
  return (
    <div className="filter-by-status">
      <h2>Filter by Status</h2>
      <button onClick={()=> dispatch(setStatusFilter('All'))}>All</button>
      <button onClick={()=> dispatch(setStatusFilter('Active'))}>Active</button>
      <button onClick={()=> dispatch(setStatusFilter('Completed'))}>Completed</button>
    </div>
  )
}

export default StatusComponent
