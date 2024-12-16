import { createSlice } from "@reduxjs/toolkit";
import { selectToDoFromList } from "./todoListSlice";

const filterSlice = createSlice({
  name: "FilterNameInSlice",
  initialState: {
    statusFilter: "All",
    colorFilter : {
      list : []
    },
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.statusFilter = action.payload;
      console.log("state.statusFilter",state.statusFilter);
    },
    addColorToList: (state, action) => {
      // Use spread to create a new array with the added color
      state.colorFilter.list = [...state.colorFilter.list, action.payload];
      console.log("state.list", state.colorFilter.list);
    },
    removeColorFromList: (state, action) => {
      // Filter out the color that is being removed
      state.colorFilter.list = state.colorFilter.list.filter(color => color !== action.payload);
      console.log("Removed color:", action.payload, "Updated list:", state.colorFilter.list);
    },
  },
});

export const selectFilteredTask = (state) => {
  const todoList = selectToDoFromList(state);
  const statusFilter = state.filterKeyInStore.statusFilter;

  return filterFunctions[statusFilter] ? filterFunctions[statusFilter](todoList) : todoList ;
  }

  export const selectFilteredTasksByStatusAndColor = (state) => {
    const filteredByStatus = selectFilteredTask(state);
    const colorFilterList = state.filterKeyInStore.colorFilter.list;
    console.log("colorFilterList",colorFilterList);
    return colorFilterList.length === 0 
  ? filteredByStatus 
  : filteredByStatus.filter((task) => colorFilterList.includes(task.color));
  };
  

const filterFunctions = {
  All: (list) => list,
  Active: (list) => list.filter((task) => !task.completed),
  Completed: (list) => list.filter((task) => task.completed),
};

export const selectOptions = ['','Green','Blue' ,'Orange' ,'Purple','Red'];
export const selectColorFilterList = (state) => state.filterKeyInStore.colorFilter.list;

export const filterOptions = Object.keys(filterFunctions);

export const { setStatusFilter,addColorToList,removeColorFromList } = filterSlice.actions;
export default filterSlice.reducer;
