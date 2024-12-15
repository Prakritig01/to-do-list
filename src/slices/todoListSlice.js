import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name : 'todoNameInSlice',
    initialState  : {
        list : [
            {
                task : "Redux",
                id : 0,
                completed : false
            },
            {
                task : "Coding",
                id : 1,
                completed : false
            },
            {
                task : "Reading",
                id : 2,
                completed : false
            },
            {
                task : "Sleeping",
                id : 3,
                completed : false
            }
        ]
    },
    reducers : {
        addTask : (state,action) => {
            console.log(action.payload);
            const newTask = {
                task : action.payload,
                id : getNewId(state.list),
                completed : false
            };
            // console.log("newTask",newTask);
            state.list.push(newTask);
            // console.log("state.list" , state.list);
        },
        deleteTask : (state,action) => {
            console.log("here");
            console.log("action.payload",action.payload);
            const id = action.payload;
            state.list = state.list.filter((ele) => ele.id != id);
            // console.log("state.list",state.list);
        },
        toggleStatus :(state,action) => {
            const id = action.payload;
            const task = state.list.find((task) => task.id === id);
            if (task) {
                task.completed = !task.completed; 
            }

            // console.log("updated state list" ,state.list);
        },
        markAllCompleted : (state,action) => {
            console.log("here");
            state.list.forEach(task => {
                task.completed = true; 
            });
            console.log(state.list);
        },
        clearCompleted : (state,action) => {
            console.log("here");
            state.list = state.list.filter((ele) => ele.completed === false)
        },

    }
});

export const selectToDoFromList = (state) => state.toDoKeyInStore.list;
export const selectIncompleteTaskCount = (state) =>
    state.toDoKeyInStore.list.filter(task => !task.completed).length;


const getNewId = (todoList) => {
    let newId = -1;
    todoList.forEach(element => {
        newId = Math.max(newId,element.id);
    });
    return newId+1;
}

export const {addTask,deleteTask,toggleStatus,markAllCompleted,clearCompleted} = todoListSlice.actions;
export default todoListSlice.reducer;