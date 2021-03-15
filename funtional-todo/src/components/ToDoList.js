import React from 'react'
import { nanoid } from 'nanoid'

import ToDo from './ToDo'

const ToDoList = ({toDos, handleToggle, handleFilter}) => {
    return (
        <section>
            {toDos.map(toDo => {
                return (
                    <ToDo toDo={toDo} handleToggle={handleToggle} handleFilter={handleFilter} key={nanoid()} />
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </section>
    )
}

export default ToDoList
