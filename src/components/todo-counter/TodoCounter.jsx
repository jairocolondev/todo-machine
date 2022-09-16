import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import './TodoCounter.css'

function TodoCounter() {
const {
  totalTodos, 
  completedTodos
} = useContext(TodoContext)

  return (
    <div>
      <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    </div>
  )
}

export {TodoCounter}