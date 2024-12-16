import React from 'react'
import { useDispatch } from 'react-redux';
import ActionsComponent from '../ActionsComponent/ActionsComponent';
import RemainingToDos from '../RemainingRoDos/RemainingToDos';
import StatusComponent from '../StatusComponent/StatusComponent';
import ColorComponent from '../ColorComponent/ColorComponent';
import './FilterContainer.css'


const FilterConatiner = () => {
    const dispatch = useDispatch();
  return (
    <div className='filter-conatiner'>
        <ActionsComponent/>
        <RemainingToDos/>
        <StatusComponent/>
        <ColorComponent/>
    </div>
  )
}

export default FilterConatiner;
