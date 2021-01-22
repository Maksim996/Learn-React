import React from 'react';
import TodoList from "./Todo/TodoList";

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

  return (
    <div className={'wrapper'}>
      <h2>Title react</h2>
      <TodoList obj={todoObj} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;
