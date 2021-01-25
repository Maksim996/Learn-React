import React from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";

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

  return (
    <Context.Provider value={ {removeItem} }>
      <div className={'wrapper'}>
        <h2>Title react</h2>
        { todoObj.length ? <TodoList obj={todoObj} onToggle={toggleTodo}/> : <span>no list</span>}

      </div>
    </Context.Provider>
  );
}

export default App;
