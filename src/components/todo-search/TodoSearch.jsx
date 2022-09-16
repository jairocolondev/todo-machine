import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

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
