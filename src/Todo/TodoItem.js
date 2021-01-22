import React from 'react'
import PropTypes from 'prop-types';
// import className from 'cla';

function TodoItem({ props, index, onChange }) {
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

  const classes = [];

  if (props.completed) {
    classes.push('done');
  }

  return (
    <li style={styles.li}>
      <span style={styles.span} className={classes.join(' ')}>
        <input type="checkbox"
               style={styles.checkbox}
               checked={props.completed}
               onChange={() => onChange(props.id)}
        />
        <strong>{++index}&nbsp;</strong>
        {props.name}
      </span>
      <button type="button" className='rm'>&times;</button>
    </li>
  )
}

TodoItem.propTypes = {
  props: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem
