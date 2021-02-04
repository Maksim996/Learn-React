import React from 'react';
import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
import Search from './components/Search'

const App = () => {
  return (
    <div>
      <AppHeader />
      <Search />
      <TodoList />
    </div>
  )
}

export default App;
