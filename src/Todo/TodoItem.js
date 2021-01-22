import React from 'react'
import PropTypes from 'prop-types';

function TodoItem({props, index}) {
  const styles = {
    span: {
      display: 'flex',
      alignItems: 'center',
    },
    li: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '1px solid #ccc',
      borderRadius: 0,
      margin: '5px 0',
      padding: '5px',
    },
    checkbox: {
      marginRight: '1rem'
    }
  }


  return (
    <li style={styles.li}>
      <span style={styles.span}>
        <input type="checkbox" style={styles.checkbox}/>
        <strong>{++index}&nbsp;</strong>
        {props.name}
      </span>
      <button type="button" className='rm'>&times;</button>
    </li>
  )
}

TodoItem.propTypes = {
  props: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default TodoItem
