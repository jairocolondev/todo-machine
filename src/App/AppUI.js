import React from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoCounter } from '../components/todo-counter/TodoCounter';
import { TodoSearch } from '../components/todo-search/SearchTodo';
import { TodoList } from '../components/todo-list/TodoList';
import { TodoItem } from '../components/todo-item/TodoItem';
import { TodosError } from '../todos-error/TodosError';
import { TodosLoading } from '../todos-loading/TodosLoading';
import { EmptyTodos } from '../empty-todos/EmptyTodos';
import { TodoForm } from '../components/todo-form/TodoForm';
import { CreateTodoButton } from '../components/create-todo-button/CreateTodoButton';
import { ModalCreateTodo } from '../components/modal/ModalCreateTodo';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <ModalCreateTodo>
          <TodoForm />
        </ModalCreateTodo>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
