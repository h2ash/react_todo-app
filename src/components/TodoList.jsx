import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todoList, implementedTodos }) => (
  <ul className="todo-list">
      {todoList.map(todo => (
      <TodoItem 
        todo={todo}
      />
    ))}
  </ul>

)

export default TodoList