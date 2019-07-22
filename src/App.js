import React from 'react';
import InputField from './components/InputField';
import ToggleCompleted from './components/ToggleCompleted';
import TodoList from './components/TodoList'

class App extends React.Component {
  state = {
    todoList: [],
    implementedTodos: [],
  }

  counterId = 1;

  // removeFunc = () => {
  // }

  addNewTodo = (text) => {
    const todoItem = {
      title: text,
      id: this.counterId,
      completed: false,
    };

    this.counterId++;

    this.setState(prevState => ({
      todoList: [...prevState.todoList, todoItem],
    }))
  }

  render() {
    const {
      todoList,
      implementedTodos
    } = this.state;

    console.log(this.state.todoList);
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
  
          <InputField 
            addNewTodo={this.addNewTodo}
          />
        </header>
  
        <section className="main" style={{ display: 'block' }}>
          <ToggleCompleted />

          <TodoList 
            todoList={todoList}
            implementedTodos={implementedTodos}
          />
  
        </section>
  
        <footer className="footer" style={{ display: 'block' }}>
          <span className="todo-count">
            3 items left
          </span>
  
          <ul className="filters">
            <li>
              <a href="#/" className="selected">All</a>
            </li>
  
            <li>
              <a href="#/active">Active</a>
            </li>
  
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
  
          <button
            type="button"
            className="clear-completed"
            style={{ display: 'block' }}
          />
        </footer>
      </section>
    );
  }
}

export default App;
