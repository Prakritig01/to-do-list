import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from './slices/todoListSlice';

export default configureStore({
    reducer : {
        toDoKeyInStore : toDoReducer
    }
});