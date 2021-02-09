import React, { Component } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import Search from './components/Search/Search';
import TodoStatusFilter from './components/TodoStatusFilter/TodoStatusFilter';
import AddTodos from './components/AddTodos/AddTodos';

export default class App extends Component {
  state = {
    todoData: [
      { label: 'Drink coffee', important: false, done: false, id: 1},
      { label: 'Build react app', important: true, done: false, id: 2 },
      { label: 'Some work', important: false, done: false, id: 3 },
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

  onToggleImportant = (id) => {
    const arr = this.state.todoData;
    const idx = arr.findIndex(el => el.id === id);
    const newArray = [
      ...arr.slice(0, idx),
      { ...arr[idx], important: !arr[idx].important },
      ...arr.slice(idx + 1)
    ];
    this.setState(({ todoData }) => { return { todoData: newArray } });
  };

  onToggleDone = (id) => {
    const arr = this.state.todoData;
    const idx = arr.findIndex(el => el.id === id);
    const newArray = [
      ...arr.slice(0, idx),
      { ...arr[idx], done: !arr[idx].done },
      ...arr.slice(idx + 1)
    ];
    this.setState(({ todoData }) => { return { todoData: newArray } });
  };

  render() {
    return (
      <div className="container">
        <AppHeader toDo={1} done={3} />
        <div className="row mb-4">
          <Search/>
          <TodoStatusFilter/>
        </div>
        <TodoList items={this.state.todoData}
                  onDeleted={this.onDeletedItem}
                  onToggleImportant={this.onToggleImportant}
                  onToggleDone={this.onToggleDone}
        />
        <AddTodos addTodoItem={this.addTodoItem} />
      </div>
    )
  }
}
