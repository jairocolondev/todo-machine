import React from 'react';
import { TodoContext } from '../../context/TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TAREAs</h2>
  );
}

export { TodoCounter };
