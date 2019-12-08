import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ 
  todoList, 
  filterByButton, 
  toggleChecked, 
  deleteItem,
  editTodo 
}) => {
  const filterBy = (item) => {
    if (filterByButton === 'Completed') {
      return item.completed;
    } else if (filterByButton === 'Active') {
      return !item.completed;
    } else {
      return item;
    }
  }

  return(
    <ul className="todo-list">
      {todoList
        .filter(todo => filterBy(todo))
        .map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            toggleChecked={toggleChecked}
            deleteItem={deleteItem}
            editTodo={editTodo}
          />
        ))
      }
    </ul>
  )

}

export default TodoList