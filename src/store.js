import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from './slices/todoListSlice';
import filterReducer from './slices/filterSlice'

export default configureStore({
    reducer : {
        toDoKeyInStore : toDoReducer,
        filterKeyInStore : filterReducer,
    }
});