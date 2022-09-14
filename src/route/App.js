import React from 'react';
import { TodoCounter } from '../components/todo-counter/TodoCounter';
import { TodoSearch } from '../components/todo-search/TodoSearch';
import { TodoList } from '../components/todo-list/TodoList';
import { TodoItem } from '../components/todo-item/TodoItem';
import { CreateTodoButtom } from '../components/create-todo-buttom/CreateTodoButtom';

const todos = [
	{ text: 'Cortar cebolla', completed: false },
	{ text: 'Tomar el curso de intro a react', completed: false },
	{ text: 'Llorar con la llorona', completed: false },
];

function App() {
	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{todos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
					/>
				))}
			</TodoList>
			<CreateTodoButtom />
		</React.Fragment>
	);
}

export default App;
