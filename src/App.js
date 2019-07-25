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

  handleFilter = (filterBy) => {
    this.setState(prevState => ({
      filteredTodos: [...prevState.todoList].filter(item => {
        switch(filterBy) {
          case 'Completed':
            return item.completed;
          case 'Active':
            return !item.completed;
          case 'All': // вместо All можно default
            return item;
        }
      })
    }))
  }

  toggleAll = () => {

    this.setState(prevState => {

      // вариант Димы
      if (prevState.todoList.every(todo => todo.completed)) {
        return {
          todoList: prevState.todoList.map(todo => ({
            ...todo,
            completed: false,
          }))
        }
      }

      return {
        todoList: prevState.todoList.map(todo => ({
          ...todo,
          completed: true,
        }))
      }
    })

    // this.setState(prevState => {
    //   if (prevState.todoList.some(item => item.completed)) {
    //     items = prevState.todoList.map(item => ({
    //         ...item, completed: true
    //     }))
    //   }

    //   console.log(items);
      
    //   if (prevState.todoList.every(item => item.completed)) {
    //     items = prevState.todoList.map(item => ({
    //       ...item, completed: !item.completed
    //     }))
    //   }

    //   console.log(items)
    //   return {
    //     todoList: items,
    //   }
    // })
  }

  toggleChecked = (taskId) => {
    // this.setState(prevState => {
    //   const task = prevState.todoList.find(item => item.id === taskId);
    //   task.completed = !task.completed;
      
    //   return {
    //     todoList: prevState.todoList,
    //   }
    // })


    // вариант Димы
    this.setState(prevState => ({
      filteredTodos: prevState.todoList.map(todo => {
        if (todo.id === taskId) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }

        return todo;
      })
    }))
  }

  render() {
    const {
      todoList,
      filteredTodos,
    } = this.state;
    
    console.log(`todoList: `, todoList);
    console.log(`filteredTodods: `, filteredTodos);


    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
  
          <InputField 
            addNewTodo={this.addNewTodo}
          />
        </header>
  
        <section className="main" style={{ display: 'block' }}>
          <ToggleCompleted 
            toggleAll={this.toggleAll}
          />

          <TodoList 
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
                onClick={() => this.handleFilter('All')}
              >All</a>
            </li>
  
            <li>
              <a href="#/active"
                onClick={() => this.handleFilter('Active')}
              >Active</a>
            </li>
  
            <li>
              <a href="#/completed"
                onClick={() => this.handleFilter('Completed')}
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
