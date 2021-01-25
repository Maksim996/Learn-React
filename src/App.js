import React from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import AddItemTodo from './Todo/AddItemTodo';

function App() {
  const [todoObj, setTodoObj] = React.useState([
    {id: 1, completed: false, name: 'Buy beer'},
    {id: 2, completed: true, name: 'Buy car'},
    {id: 3, completed: false, name: 'Buy bus'},
  ])

  function toggleTodo(id) {
    setTodoObj( todoObj.map(el => {
      if (el.id === id)
        el.completed = !el.completed;

      return el
    }))
  }

  function removeItem(id) {
    setTodoObj(todoObj.filter( el => el.id !== id));
  }
  function addItemTodo(value) {
    setTodoObj(todoObj.concat([{
      id: Date.now(),
      name: value,
      completed: false
    }]))
  }

  return (
    <Context.Provider value={ {removeItem} }>
      <div className={'wrapper'}>
        <h2>Title react</h2>
        <AddItemTodo onCreate={addItemTodo}/>
        { todoObj.length ? <TodoList obj={todoObj} onToggle={toggleTodo}/> : <span>no list</span>}

      </div>
    </Context.Provider>
  );
}

export default App;
