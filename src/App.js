import React from 'react';
import InputField from './components/InputField';
import ToggleCompleted from './components/ToggleCompleted';
import TodoList from './components/TodoList'

class App extends React.Component {
  state = {
    todoList: [],
    filteredTodos: [],
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

    this.setState(prevState => ({
      filteredTodos: [...prevState.todoList],
    }))
  }

  filteredTodos = (filterBy) => {
    this.setState(prevState => ({
      filteredTodos: [...prevState.todoList].filter(item => {
        switch(filterBy) {
          case 'Completed':
            return item.completed;
          case 'Active':
            return !item.completed;
          case 'All': 
            return item;
        }
      })
    }))
  }

  toggleChecked = (taskId) => {
    this.setState(prevState => {
      const task = prevState.todoList.find(item => item.id === taskId);
      task.completed = !task.completed;
      
      return {
        todoList: prevState.todoList,
      }
    })
  }

  render() {
    const {
      todoList,
      filteredTodos,
    } = this.state;

    console.log(this.state.todoList);
    console.log(this.state.filteredTodos);
    
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
            filteredTodos={filteredTodos}
            toggleChecked={this.toggleChecked}
          />
  
        </section>
  
        <footer className="footer" style={{ display: 'block' }}>
          <span className="todo-count">
            3 items left
          </span>
  
          <ul className="filters">
            <li>
              <a href="#/" className="selected"
                onClick={() => this.filteredTodos('All')}
              >All</a>
            </li>
  
            <li>
              <a href="#/active"
                onClick={() => this.filteredTodos('Active')}
              >Active</a>
            </li>
  
            <li>
              <a href="#/completed"
                onClick={() => this.filteredTodos('Completed')}
              >Completed</a>
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
