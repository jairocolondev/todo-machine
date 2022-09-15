import React, { useState } from 'react';
import { TodoCounter } from '../components/todo-counter/TodoCounter';
import { TodoSearch } from '../components/todo-search/TodoSearch';
import { TodoList } from '../components/todo-list/TodoList';
import { TodoItem } from '../components/todo-item/TodoItem';
import { CreateTodoButtom } from '../components/create-todo-buttom/CreateTodoButtom';

const defaultTodos = [
	{ text: 'Darle la comida a las loquitas', completed: false },
	{ text: 'Tomar el curso de intro a react', completed: false },
	{ text: 'Ver serie con mi hermosa mujer', completed: true },
	{ text: 'Jugar con Simona', completed: false },
];

function App() {
	const [todos, setTodos] = useState(defaultTodos)
	const [searchValue, setSearchValue] = useState('');

	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];

	if(!searchValue.length >= 1){
    searchedTodos = todos
	} else {
    searchedTodos = todos.filter(todo => {
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoText.includes(searchText)
		})
	}

	const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
		
		const newTodos = [...todos]
		newTodos[todoIndex].completed = true;
		setTodos(newTodos)
	};

	const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
		
		const newTodos = [...todos]
		newTodos.splice(todoIndex, 1)
		setTodos(newTodos)
	};

	return (
		<React.Fragment>
			<TodoCounter 
			total={totalTodos}
			completed={completedTodos}
			/>
			<TodoSearch 
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			/>
			<TodoList>
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
			<CreateTodoButtom />
		</React.Fragment>
	);
}

export {App};
