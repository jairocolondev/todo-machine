import React from 'react';
import ReactDOM from 'react-dom/client';
import './ModalCreateTodo.css'

function ModalCreateTodo({ children }) {
	// return ReactDOM.createPortal(
	// 		<div className="ModalBackground">
	// 			{children}
	// 		</div>,
	// 	document.getElementById('modal')
  // );

	const modal = ReactDOM.createRoot(document.getElementById('modal'));
     modal.render(
   			 <div className="ModalBackground">
				  {children}
	  		 </div>
    );
 }

export { ModalCreateTodo };
