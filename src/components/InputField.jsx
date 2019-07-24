import React from 'react'

class InputField extends React.Component {
  state = {
    title: '',
  }

  handleInput = (event) => {
    const {value} = event.target;

    this.setState({
      title: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addNewTodo(this.state.title);

    this.setState({
      title: '',
    })
  }

  render() {
    const {title} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='todo'
          value={title}
          onChange={this.handleInput}
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    )
  }
}

export default InputField