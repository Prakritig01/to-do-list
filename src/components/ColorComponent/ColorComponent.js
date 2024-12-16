import React from "react";
import "./ColorCOmponent.css";
import { selectOptions } from "../../slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addColorToList,
  selectColorFilterList,
  removeColorFromList,
} from "../../slices/filterSlice";

const ColorComponent = () => {
  const dispatch = useDispatch();
  const colorFilterList = useSelector(selectColorFilterList);

  const handleColorChange = (color, isChecked) => {
    if (isChecked) {
      dispatch(addColorToList(color));
    } else {
      dispatch(removeColorFromList(color));
    }
  };
  return (
    <div className="color-component">
      <h2>Filter by Color</h2>
      <div className="options">
        {selectOptions.map((color, index) => (
          <div key={index} className="checkbox-item">
            <label>
              <input
                type="checkbox"
                value={color}
                checked={colorFilterList.includes(color)} // Mark checkbox as checked if color is in the list
                onChange={(e) => handleColorChange(color, e.target.checked)} // Dispatch the action based on check/uncheck
              />
              {color}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorComponent;
