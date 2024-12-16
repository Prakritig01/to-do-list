import { createSlice } from "@reduxjs/toolkit";
import { selectToDoFromList } from "./todoListSlice";

const filterSlice = createSlice({
  name: "FilterNameInSlice",
  initialState: {
    statusFilter: "All",
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.statusFilter = action.payload;
      console.log("state.statusFilter",state.statusFilter);
    },
  },
});

export const selectFilteredTask = (state) => {
  const todoList = selectToDoFromList(state);
  const statusFilter = state.filterKeyInStore.statusFilter;
  
  return filterFunctions[statusFilter] ? filterFunctions[statusFilter](todoList) : todoList ;
  }


const filterFunctions = {
  All: (list) => list,
  Active: (list) => list.filter((task) => !task.completed),
  Completed: (list) => list.filter((task) => task.completed),
};

export const filterOptions = Object.keys(filterFunctions);

export const { setStatusFilter } = filterSlice.actions;
export default filterSlice.reducer;
