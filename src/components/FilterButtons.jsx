import React from 'react'

class FilterButtons extends React.Component {
  state = {
    idOfA: 1,
  }

  filterByAndToggleCSS = (id, filteredBy) => {
    this.setState({
      idOfA: id,
    });

    this.props.handleFilter(filteredBy);
  }

  render() {
    return (
      <ul className="filters">
        <li>
          <a
            href="#/"
            // className="selected"
            className={this.state.idOfA === 1 && 'selected'}
            onClick={() => this.filterByAndToggleCSS(1, 'All')}
          >
            All
          </a>
        </li>
      
        <li>
          <a 
            href="#/active" 
            className={this.state.idOfA === 2 && 'selected'}
            onClick={() => this.filterByAndToggleCSS(2, 'Active')}
            >
            Active
          </a>
        </li>
      
        <li>
          <a
            href="#/completed"
            className={this.state.idOfA === 3 && 'selected'}
            onClick={() => this.filterByAndToggleCSS(3, 'Completed')}
          >
            Completed
          </a>
        </li>
      </ul>
    )
  }
}

export default FilterButtons