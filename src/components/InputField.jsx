import React from 'react'

class InputField extends React.Component {
  state = {
    newTodo: '',
  }

  handleInput = (event) => {
    const {value} = event.target;

    this.setState({
      newTodo: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.changeState(this.state.newTodo);

    this.setState({
      newTodo: '',
    })
  }

  render() {
    const {newTodo, todoItem} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='todo'
          value={newTodo}
          onChange={this.handleInput}
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    )
  }
}

export default InputField