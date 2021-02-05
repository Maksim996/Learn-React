import React, { Component } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import Search from './components/Search/Search';
import TodoStatusFilter from './components/TodoStatusFilter/TodoStatusFilter';
import AddTodos from './components/AddTodos/AddTodos';

export default class App extends Component {
  state = {
    todoData: [
      { label: 'Drink coffee', important: false, id: 1},
      { label: 'Build react app', important: true, id: 2 },
      { label: 'Some work', important: false, id: 3 },
    ]
  };

  onDeletedItem = (id) => {
    this.setState( (state) => {
     return {
       todoData: state.todoData.filter(el => el.id !== id ),
     }
    })
  };
  addTodoItem = (label) => {
    this.setState( ({todoData}) => {
      return {
        todoData: [...todoData, {
          label,
          important: false,
          id: Date.now()
        }],
      }
    })
  };

  render() {
    return (
      <div className="container">
        <AppHeader />
        <div className="row mb-4">
          <Search/>
          <TodoStatusFilter/>
        </div>
        <TodoList items={this.state.todoData} onDeleted={this.onDeletedItem}/>
        <AddTodos addTodoItem={this.addTodoItem} />
      </div>
    )
  }
}
