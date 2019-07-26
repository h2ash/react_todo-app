import React from 'react'

const FilterButtons = ({handleFilter}) => {
  return (
    <ul className="filters">
      <li>
        <a
          href="#/"
          className="selected"
          onClick={() => handleFilter('All')}
        >
          All
        </a>
      </li>
    
      <li>
        <a href="#/active" onClick={() => handleFilter('Active')}>
          Active
        </a>
      </li>
    
      <li>
        <a
          href="#/completed"
          onClick={() => handleFilter('Completed')}
        >
          Completed
        </a>
      </li>
    </ul>
  )

}

export default FilterButtons