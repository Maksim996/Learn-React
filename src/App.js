import React, {Component} from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import Search from './components/Search/Search';
import TodoStatusFilter from './components/TodoStatusFilter/TodoStatusFilter';
import AddTodos from './components/AddTodos/AddTodos';

export default class App extends Component {
  state = {
    todoData: [
      {label: 'Drink coffee', important: false, done: false, id: 1},
      {label: 'Build react app', important: true, done: false, id: 2},
      {label: 'Some work', important: false, done: false, id: 3},
    ],
    term: '',
    filter: 'all'
  };

  onDeletedItem = (id) => {
    this.setState((state) => {
      return {
        todoData: state.todoData.filter(el => el.id !== id),
      }
    })
  };
  addTodoItem = (label) => {
    this.setState(({todoData}) => {
      return {
        todoData: [...todoData, {
          label,
          important: false,
          id: Date.now()
        }],
      }
    })
  };
  toggleProperty(array, id, propName) {
    const idx = array.findIndex(el => el.id === id);
    return [
      ...array.slice(0, idx),
      {...array[idx], [propName]: !array[idx][propName]},
      ...array.slice(idx + 1)
    ];
  }
  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
  };
  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  };
  onSearchChange = (term) => {
    this.setState({term});
  };
  onFilterChange = (filter) => {
    this.setState({filter});
  };
  search = (items, search) => {
    if (!search.length) return items;
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
    })
  };
  filter = (items, filter) => {
    switch (filter) {
      case 'all': return items;
      case 'active': return items.filter((item) => !item.done);
      case 'done': return items.filter((item) => item.done);
      default: return items;
    }
  };

  render() {
    const {todoData, term, filter} = this.state;
    const doneCount = todoData.filter(el => el.done).length;
    const toDoCount = todoData.length - doneCount;
    const viewItemsTodoData = this.filter(this.search(todoData, term), filter);

    return (
      <div className="container">
        <AppHeader toDo={toDoCount} done={doneCount}/>
        <div className="row mb-4">
          <Search onSearchChange={this.onSearchChange}/>
          <TodoStatusFilter filter={ filter } onFilterChange={ this.onFilterChange }/>
        </div>
        <TodoList items={viewItemsTodoData}
                  onDeleted={this.onDeletedItem}
                  onToggleImportant={this.onToggleImportant}
                  onToggleDone={this.onToggleDone}
        />
        <AddTodos addTodoItem={this.addTodoItem}/>
      </div>
    )
  }
}
