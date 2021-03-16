import React from 'react'

const ToDo = ({ toDo, handleToggle }) => {
    return (
        <div className={toDo.complete ? 'strike' : ''} onClick={() => handleToggle(toDo.id)}>
            {toDo.task}
        </div>
    )
}

export default ToDo
