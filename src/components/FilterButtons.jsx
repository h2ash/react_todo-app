import React from 'react'

class FilterButtons extends React.Component {
  state = {
    idForButton: 1,
  }

  filterByAndToggleCSS = (id, filteredBy) => {
    this.setState({
      idForButton: id,
    });

    this.props.handleFilter(filteredBy);
  }

  render() {
    return (
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={this.state.idForButton === 1 && 'selected'}
            onClick={() => this.filterByAndToggleCSS(1, 'All')}
          >
            All
          </a>
        </li>
      
        <li>
          <a 
            href="#/active" 
            className={this.state.idForButton === 2 && 'selected'}
            onClick={() => this.filterByAndToggleCSS(2, 'Active')}
            >
            Active
          </a>
        </li>
      
        <li>
          <a
            href="#/completed"
            className={this.state.idForButton === 3 && 'selected'}
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