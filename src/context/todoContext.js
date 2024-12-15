import React, { createContext,useState} from "react";

export const TodoContext = createContext();
export const TodoContextProvider = ({children}) => {
    const [todoList,settodoList] = useState([]);


    return (
        <TodoContext.Provider value = {{todoList}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;