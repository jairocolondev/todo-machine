import React, {useContext} from 'react';
import { TodoCounter } from '../components/todo-counter/TodoCounter';
import { TodoSearch } from '../components/todo-search/TodoSearch';
import { TodoList } from '../components/todo-list/TodoList';
import { TodoItem } from '../components/todo-item/TodoItem';
import { CreateTodoButtom } from '../components/create-todo-buttom/CreateTodoButtom';
import { TodoContext } from '../context/TodoContext';
import { ModalCreateTodo } from '../modal/modal-create-todo/ModalCreateTodo';

function AppUI() {
	const { 
		error, 
		loading, 
		searchedTodos, 
		completeTodo, 
		deleteTodo 
	} = useContext(TodoContext);

	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{error && <h2>Hubo un error, recarga la Página⚠️​​</h2>}
				{loading && <h3>Estamos Cargando la lista de tus Tareas... ​⏳​​</h3>}
				{!loading && !searchedTodos.length && (
					<h2>¡Crea tu primera Tarea! ✍️</h2>
				)}
				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			<ModalCreateTodo>
				<p>Activando Modal</p>
			</ModalCreateTodo>
			<CreateTodoButtom />
		</React.Fragment>
	);
}

export { AppUI };
