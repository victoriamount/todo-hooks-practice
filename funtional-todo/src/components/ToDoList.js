import React from 'react'
import { nanoid } from 'nanoid'
import ToDo from './ToDo'

const ToDoList = ({ toDos, handleToggle, handleFilter }) => {
    return (
        <div>
            {toDos.map((toDo) => {
                return <ToDo toDo={toDo} key={nanoid()} handleToggle={handleToggle} /> 
            })}
            <button onClick={handleFilter}>Remove Completed</button>
        </div>
    )
}

export default ToDoList
