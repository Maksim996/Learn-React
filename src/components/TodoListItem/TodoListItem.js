import React from 'react';
import './TodoListItem.css'

export default function TodoListItem({label, important, done, onDeleted, toggleDone, toggleImportant}) {
   const classLabel = [
     important ? 'text-danger' : 'text-primary',
     done ? 'done' : ''
   ];

   return (
     <div className="todo-list-item">
       <span className={classLabel.join(' ')} onClick={toggleDone}>{ label }</span>
       <div className="d-flex align-items-center" role="group" aria-label="Basic example">
         <button type="button" className="btn btn-outline-danger" onClick={onDeleted}>
           <i className="fa fa-trash"></i>
         </button>
         <button type="button"
                 className={`btn btn-outline-success ${ important ? "active" : ""}`}
                 onClick={toggleImportant}
         >
           <i className="fa fa-exclamation"></i>
         </button>
       </div>
     </div>
   );
 };
