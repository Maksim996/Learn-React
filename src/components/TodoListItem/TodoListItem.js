import React, { Component } from 'react';
import './TodoListItem.css'

export default class TodoListItem extends Component {
 state = {
   done: false,
   important: this.props.important
  };

 onLabelClick = () => {
    this.setState(({ done })=>{ return { done: !done }});
 };

 onImportantClick = () => {
   this.setState(({important}) => {return { important: !important }})
 };

 render() {
   const {label} = this.props;
   const {done, important} = this.state;
   const classLabel = [important ? 'text-danger' :'text-primary'];

   if (done) classLabel.push('done');

   return (
     <div className="todo-list-item">
       <span className={classLabel.join(' ')} onClick={this.onLabelClick}>{ label }</span>
       <div className="d-flex align-items-center" role="group" aria-label="Basic example">
         <button type="button" className="btn btn-outline-danger">
           <i className="fa fa-trash"></i>
         </button>
         <button type="button"
                 className={`btn btn-outline-success ${important ? "active" : ""}`}
                 onClick={this.onImportantClick}
         >
           <i className="fa fa-exclamation"></i>
         </button>
       </div>
     </div>
   );
 }
}
