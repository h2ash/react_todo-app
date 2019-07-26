import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ filteredTodos, toggleChecked, deleteItem }) => (
  <ul className="todo-list">
      {filteredTodos.map(todo => (
      <TodoItem 
        key={todo.id}
        todo={todo}
        toggleChecked={toggleChecked}
        deleteItem={deleteItem}
      />
    ))}
  </ul>

)

export default TodoList