import React, { Component } from 'react';
import './TodoListItem.css'

export default class TodoListItem extends Component {
 render() {
   const {label, important} = this.props;

   const style = {
     color : important ? "tomato" : "black"
   };

   return (
     <div className="todo-list-item">
       <span style={style}>{ label }</span>
       <div className="d-flex align-items-center" role="group" aria-label="Basic example">
         <button type="button" className="btn btn-outline-danger">
           <i className="fa fa-trash"></i>
         </button>
         <button type="button" className="btn btn-outline-success">
           <i className="fa fa-exclamation"></i>
         </button>
       </div>
     </div>
   );
 }
}
