import React, { useState } from 'react'

const ToDoForm = ({ addToDo }) => {
    const  [ formValues, setFormValues ] = useState('')

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
            <input value={formValues} type='text' onChange={handleChange} placeholder='Enter to-do...' />
            <button>Submit</button>
        </form>
    )
}

export default ToDoForm
