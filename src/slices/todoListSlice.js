import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name : 'todoNameInSlice',
    initialState  : {
        list : []
    },
    reducers : {
        addTask : (state,action) => {
            console.log(action.payload);
            const newTask = {
                task : action.payload,
                id : getNewId(state.list)
            };
            console.log("newTask",newTask);
            state.list.push(newTask);
            console.log("state.list" , state.list);
        },
        
    }
});

export const selectToDoFromList = (state) => state.toDoKeyInStore.list;

const getNewId = (todoList) => {
    let newId = -1;
    todoList.forEach(element => {
        newId = Math.max(newId,element.id);
    });
    return newId+1;
}

export const {addTask} = todoListSlice.actions;
export default todoListSlice.reducer;