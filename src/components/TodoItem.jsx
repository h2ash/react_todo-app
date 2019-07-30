import React from 'react'

/**
 * [] - сделать css как у input
 * [x] - реализовать исправление элентта по enter и смене функции
 * [] - исправить, чтобы при нажатии на текст элемента не менялся статус
 *    уточка, как это сделать?
 *    а почему меняется сейчас?
 */

class TodoItem extends React.Component {
  state = {
    isEditing: false,
    title: this.props.todo.title,
  }

  startEdit = () => {
    this.setState({
      isEditing: true,
    })
  }

  editTitle = (event) => {
    const { value } = event.target;

    this.setState({
      title: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.title) {
      this.props.editTodo(this.state.title, this.props.todo.id);
      this.setState({
        isEditing: false,
      })
    }
  }

  render() {
    const { deleteItem, todo, toggleChecked } = this.props;
    const { isEditing, title } = this.state;

    return (
      <li className={todo.completed ? 'completed' : ''}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            id={todo.id}
            checked={todo.completed}
            onChange={() => toggleChecked(todo.id)}
          />
          {
            isEditing
              ? <form
                  onSubmit={this.handleSubmit}
                  onBlur={this.handleSubmit}
                >
                  <input
                    onChange={this.editTitle}
                    value={title}
                    className='new-todo'
                    type="text" 
                    autoFocus
                  />
                </form>
              : <>
                  <label
                    onDoubleClick={this.startEdit}
                  >
                    {todo.title}
                    </label>
                  <button
                    type="button"
                    className="destroy"
                    onClick={() => deleteItem(todo.id)}
                  />
              </>
          }
        </div>
      </li>
    )
  }
}

export default TodoItem