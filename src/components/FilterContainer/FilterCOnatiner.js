import React from 'react'
import { useDispatch } from 'react-redux';
import ActionsComponent from '../ActionsComponent/ActionsComponent';
import RemainingToDos from '../RemainingRoDos/RemainingToDos';
import './FilterContainer.css'


const FilterConatiner = () => {
    const dispatch = useDispatch();
  return (
    <div className='filter-conatiner'>
        <ActionsComponent/>
        <RemainingToDos/>
    </div>
  )
}

export default FilterConatiner;
