import React from 'react'

const TodoItem = () => {

  return (
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
  )
}

export default TodoItem