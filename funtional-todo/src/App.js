import React, { useState } from 'react'
import { nanoid } from 'nanoid'

// Data
import data from './data.json'

// Components
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm';

// Styling
import './App.css';

function App() {
  const [ toDos, setToDos ] = useState(data)

  const handleToggle = (id) => {
    let mapped = toDos.map(toDo => {
      return toDo.id === id ? { ...toDo, complete: !toDo.complete } : {...toDo}
    })
    setToDos(mapped)
  }

  const handleFilter = () => {
    let filtered = toDos.filter(toDo => {
      return !toDo.complete
    })
    setToDos(filtered)
  }

  const addToDo = (formValues) => {
    let copy = [...toDos]
    copy = [...copy, { id: nanoid(), task: formValues, complete: false }]
    setToDos(copy)
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDos={toDos} handleToggle={handleToggle} handleFilter={handleFilter} />
      <ToDoForm addToDo={addToDo} />
    </div>
  );
}

export default App
