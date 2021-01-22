import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from "prop-types";

function TodoList(props) {
  return (
    <ul>
      {props.obj.map((obj, index) => {
        return <TodoItem props={obj} key={index} index={index}/>
      })}
    </ul>
  )
}

TodoList.propTypes = {
  obj: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList
