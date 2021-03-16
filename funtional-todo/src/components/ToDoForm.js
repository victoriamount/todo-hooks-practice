import React, { useState } from 'react'

const ToDoForm = ({ addToDo }) => {
    const [formValues, setFormValues] = useState('')

    const handleChange = (e) => {
        setFormValues(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addToDo(formValues)
        setFormValues('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={formValues} type='text' placeholder='Add a to-do...' />
            <button>Submit</button>
        </form>
    )
}

export default ToDoForm
