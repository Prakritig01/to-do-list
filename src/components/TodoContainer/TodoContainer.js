import React, { useContext } from 'react'
import TodoContext from '../../context/todoContext'

const TodoContainer = () => {
    let {todoList} = useContext(TodoContext);
    // console.log("todolist in container", todoList);
  return (
    <div className="todo-container">
        {todoList.map((item, i) => (
            <div key = {i}>
                {console.log("item",item)}
                <p>{item}</p>
            </div>
        )) }
    </div>
  )
}

export default TodoContainer
