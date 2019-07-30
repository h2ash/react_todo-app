import React, { Component } from 'react';
import InputField from './components/InputField';
import ToggleCompleted from './components/ToggleCompleted';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import ClearButton from './components/ClearButton';

/**
 * [] - добавить возможность редактирования todo по даблклику
 *   [] - превратим в класс TodoItem и добавим туда состояние
 *        и ф-цию для редактирования внутреннего текста todo.title
 */

class App extends Component {
  state = {
    todoList: [],
    filterByButton: '',
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
        count: prevState.count + 1,
      };
    });
  };

  editTodo = (text, id) => {
    this.setState(prevState => {
      const todos = prevState.todoList.map(todo => {
        return todo.id === id
          ? {
            ...todo,
            title: text,
          }
          : todo
      });

      console.log('editTodo is alive');

      return {
        todoList: todos,
      };
    });
  }

  countUncompletedTodos = () => {
    return this.state.todoList
      .filter(item => !item.completed).length;
  };

  deleteAllCompletedTodos = () => {
    this.setState(prevState => {
      const uncompletedTodos = prevState.todoList
        .filter(item => !item.completed);

      return {
        todoList: [...uncompletedTodos],
      }
    })
  };

  deleteItem = taskId => {
    this.setState(prevState => {
      const withoutRemovedItems = prevState.todoList.filter(item => item.id !== taskId);
      
        return {
          todoList: [...withoutRemovedItems],
        }
    })
  }

  handleFilter = filterBy => {
    this.setState({
      filterByButton: filterBy,
    });
  };

  toggleAll = () => {
    this.setState(prevState => {
      const todos = prevState.todoList.map(todo => ({
        ...todo,
        completed: !prevState.todoList.every(todo => todo.completed)
      }));

      return {
        todoList: todos,
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
      };
    });
  };

  render() {
    const { todoList, filterByButton } = this.state;
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
            filterByButton={filterByButton}
            todoList={todoList}
            toggleChecked={this.toggleChecked}
            deleteItem={this.deleteItem}
            editTodo={this.editTodo}
          />
        </section>

        <footer className="footer" style={{ display: 'block' }}>
          <span className="todo-count">
            {countUncompletedTodos} items left
          </span>

          <FilterButtons 
            handleFilter={this.handleFilter}
           />

          <ClearButton 
            todoList={todoList}
            deleteAllCompletedTodos={this.deleteAllCompletedTodos}
          />
        </footer>
      </section>
    );
  }
}

export default App;
