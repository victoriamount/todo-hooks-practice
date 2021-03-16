import React, { useState } from 'react'
import { nanoid } from 'nanoid'

// Data
import data from './data.json'

// Components
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'

// Styling
import './App.css'

function App() {
  const [ toDos, setToDos ] = useState(data)

  const handleToggle = (taskId) => {
    let copy = toDos.map(toDo => {
      return toDo.id === taskId ? {...toDo, complete: !toDo.complete} : {...toDo}
    })
    setToDos(copy)
  }

  const handleFilter = () => {
    let copy = toDos.filter(toDo => {
      return !toDo.complete
    })
    setToDos(copy)
  }

  const addToDo = (formValues) => {
    let copy = [...toDos, {id: nanoid(), task: formValues, complete: false}]
    setToDos(copy)
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDos={toDos} handleToggle={handleToggle} handleFilter={handleFilter} />
      <ToDoForm addToDo={addToDo} />
    </div>
  )
}

export default App
