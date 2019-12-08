import React from 'react'

const ClearButton = ({ todoList, deleteAllCompletedTodos }) => (
  <button
    type="button"
    className="clear-completed"
    style={{ display: 'block' }}
    onClick={deleteAllCompletedTodos}
  >
    {todoList.some(todo => todo.completed === true) && 'Clear Completed'}
  </button>
)

export default ClearButton