import React, { useContext} from 'react';
import { TodoContext } from '../../context/TodoContext';
import './TodoSearch.css';

function TodoSearch() {

	const {
		searchValue, 
		setSearchValue
	} = useContext(TodoContext)

	const onSearchValueChange = (event) => {
		console.log('Escuchando event', event.target.value);
		setSearchValue(event.target.value);
	};

	return (
		<input
			className="TodoSearch"
			placeholder="Busca entre tus tareas"
			value={searchValue}
			onChange={onSearchValueChange}
      />
	);
}

export { TodoSearch };
