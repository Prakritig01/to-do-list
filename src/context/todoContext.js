import React, { createContext,useState} from "react";

export const TodoContext = createContext();
export const TodoContextProvider = ({children}) => {

    const [todoList,settodoList] = useState([]);

    const addTask = (entry) =>{
        // console.log(entry);
        const prevTodoList = [...todoList];
        prevTodoList.push(entry);
        // console.log("prevTodoList",prevTodoList);
        settodoList(prevTodoList);
        // console.log("todoList" ,todoList);
    }

    return (
        <TodoContext.Provider value = {{addTask,todoList}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;