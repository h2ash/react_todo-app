import React, { Component } from 'react';
import InputField from './components/InputField';
import ToggleCompleted from './components/ToggleCompleted';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';

class App extends Component {
  state = {
    todoList: [],
    filteredTodos: [],
    count: 1
  };

  addNewTodo = text => {
    const todoItem = {
      title: text,
      id: this.state.count,
      completed: false,
    };

    this.setState(prevState => {
      const todos = [...prevState.todoList, todoItem];
      return {
        todoList: todos,
        filteredTodos: todos,
        count: prevState.count + 1,
      };
    });
  };

  countUncompletedTodos = () => {
    return this.state.todoList
      .filter(item => item.completed === false).length;
  };

  deleteAllCompletedTodos = () => {
    this.setState(prevState => {
      const uncompletedTodos = prevState.todoList
        .filter(item => item.completed === false);

      return {
        todoList: [...uncompletedTodos],
        filteredTodos: [...uncompletedTodos],
      }

    })
  };

  handleFilter = filterBy => {
    this.setState(prevState => ({
      filteredTodos: prevState.todoList.filter(item => {
        switch (filterBy) {
          case 'Completed':
            return item.completed;

          case 'Active':
            return !item.completed;

          default:
            return item;
        }
      })
    }));
  };

  toggleAll = () => {
    this.setState(prevState => {
      const todos = prevState.todoList.map(todo => ({
        ...todo,
        completed: !prevState.todoList.every(todo => todo.completed)
      }));

      return {
        todoList: todos,
        filteredTodos: todos,
      };
    });
  };

  toggleChecked = taskId => {
    this.setState(prevState => {
      const todos = prevState.todoList.map(todo => {
        return todo.id === taskId
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo;
      });

      return {
        todoList: todos,
        filteredTodos: todos,
      };
    });
  };

  render() {
    const { todoList, filteredTodos } = this.state;
    const countUncompletedTodos = this.countUncompletedTodos();

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>

          <InputField addNewTodo={this.addNewTodo} />
        </header>

        <section className="main" style={{ display: 'block' }}>
          <ToggleCompleted toggleAll={this.toggleAll} />

          <TodoList
            filteredTodos={filteredTodos}
            toggleChecked={this.toggleChecked}
          />
        </section>

        <footer className="footer" style={{ display: 'block' }}>
          <span className="todo-count">
            {countUncompletedTodos} items left
          </span>

          <FilterButtons handleFilter={this.handleFilter} />

          <button
            type="button"
            className="clear-completed"
            style={{ display: 'block' }}
            onClick={this.deleteAllCompletedTodos}
          >
            {todoList.some(todo => todo.completed === true) && 'Clear Completed'}
          </button>
        </footer>
      </section>
    );
  }
}

export default App;
