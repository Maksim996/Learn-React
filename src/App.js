import React, { useEffect, Suspense  } from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
// import AddItemTodo from './Todo/AddItemTodo';
import Loader from './Components/Basic/Loader';

function App() {
  const [todoObj, setTodoObj] = React.useState([]);
  const [loader, setLoader] = React.useState(true);
  const AddItemTodo = React.lazy( () => import('./Todo/AddItemTodo'));

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todoObj => {
        setTimeout(() => {
          setTodoObj(todoObj)
          setLoader(false)
        }, 2000)
      })
  }, [])

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
      title: value,
      completed: false
    }]))
  }

  return (
    <Context.Provider value={ {removeItem} }>
      <div className={'wrapper'}>
        <h2>Title react</h2>

        {loader && <Loader/> }
        <Suspense fallback={<div>Загрузка...</div>}>
          <AddItemTodo onCreate={addItemTodo}/>
        </Suspense>
        { todoObj.length ? <TodoList obj={todoObj} onToggle={toggleTodo}/> : loader ? null : <span>no list</span>}

      </div>
    </Context.Provider>
  );
}

export default App;
