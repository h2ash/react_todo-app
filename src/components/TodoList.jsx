import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todoList, filteredTodos }) => (
  <ul className="todo-list">
      {filteredTodos.map(todo => (
      <TodoItem 
        todo={todo}
      />
    ))}
  </ul>

)

export default TodoList