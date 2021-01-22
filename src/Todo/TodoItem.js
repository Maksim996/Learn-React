import React from 'react'
import PropTypes from 'prop-types';

function TodoItem({props, index}) {
  return (
    <li>
      <strong>{++index} </strong>
      {props.name}
    </li>
  )
}

TodoItem.propTypes = {
  props: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default TodoItem
