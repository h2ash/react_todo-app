import React from 'react'

const ToggleCompleted = ({toggleAll}) => {
  return (
    <div>
      <input 
        type="checkbox" 
        id="toggle-all" 
        className="toggle-all" 
        onChange={toggleAll}
        />
      <label 
      htmlFor="toggle-all">
        Mark all as complete
      </label>
    </div>
  )
}

export default ToggleCompleted