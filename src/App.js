import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import Search from './components/Search/Search';
import TodoStatusFilter from './components/TodoStatusFilter/TodoStatusFilter';
import AddTodos from './components/AddTodos/AddTodos';

const App = () => {

  const todoData = [
    { label: 'Drink coffee', important: false, id: 1},
    { label: 'Build react app', important: true, id: 2 },
    { label: 'Some work', important: false, id: 3 },
  ]

  return (
    <div className="container">
      <AppHeader />
      <div className="row mb-4">
        <Search/>
        <TodoStatusFilter/>
      </div>
      <TodoList items={todoData}/>
      <AddTodos />
    </div>
  )
}

export default App;
