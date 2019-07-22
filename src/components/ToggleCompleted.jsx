import React from 'react'

const ToggleCompleted = () => {
  return (
    <div>
      <input type="checkbox" id="toggle-all" className="toggle-all" />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </div>
  )
}

export default ToggleCompleted