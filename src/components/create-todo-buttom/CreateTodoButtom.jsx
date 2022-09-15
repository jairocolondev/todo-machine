import React from 'react';
import './CreateTodoButtom.css';

function CreateTodoButtom() {
	const onClickButtom = (msg) => {
		alert(msg);
	};

	return (
		<button 
    className="CreateTodoButton" 
    onClick={() => onClickButtom('Aquí se debería abrir el modal')}
    >
			+
		</button>
	);
}

export { CreateTodoButtom };
