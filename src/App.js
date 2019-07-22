import React from 'react';
import InputField from './components/InputField';
import ToggleCompleted from './components/ToggleCompleted';

class App extends React.Component {
  state = {
    todoList: [],
    implementedTodos: [],
    title: {},
    id: 0,
    completed: false,
  }

  changeState = (text) => {
    this.setState(prevState => ({
      title: text,
      id: prevState.id + 1,
    }))
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
  
          <InputField 
            changeState={this.changeState}
          />
        </header>
  
        <section className="main" style={{ display: 'block' }}>
          <ToggleCompleted />
  
          <ul className="todo-list">
            <li className="">
              <div className="view">
                <input type="checkbox" className="toggle" id="todo-1" />
                <label htmlFor="todo-1">sdfsdfsdf</label>
                <button type="button" className="destroy" />
              </div>
            </li>
  
            <li className="">
              <div className="view">
                <input type="checkbox" className="toggle" id="todo-2" />
                <label htmlFor="todo-2">sakgjdfgkhjasgdhjfhs</label>
                <button type="button" className="destroy" />
              </div>
            </li>
  
            <li className="">
              <div className="view">
                <input type="checkbox" className="toggle" id="todo-3" />
                <label htmlFor="todo-3">sddfgdfgdf</label>
                <button type="button" className="destroy" />
              </div>
            </li>
          </ul>
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
