import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from "prop-types";

function TodoList(props) {

  const styles = {
    ul: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    }
  }

  return (
    <ul style={styles.ul}>
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
