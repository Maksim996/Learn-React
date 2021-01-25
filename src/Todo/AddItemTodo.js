import React, { useState } from 'react'
import PropTypes from 'prop-types'

function useInputHook(defaultValue = '') {
  const [value, setState] = useState('');

  return {
    bind: {
      value,
      onChange: (event) => setState(event.target.value)
    },
    value: () => value,
    clear: () => setState('')
  }
}

function AddItemTodo({onCreate}) {
  const input = useInputHook('')

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }
  return (
    <form action="#" onSubmit={submitHandler}>
      <input type="text" {...input.bind}/>
      <button type="submit">Add new item</button>
    </form>
  )
}
AddItemTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddItemTodo
