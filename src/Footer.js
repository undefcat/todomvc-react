import React from 'react'
import Filter from './Filter'

function Footer(props) {

  const { clearCompletedTodos } = props
  function handleClick() {
    clearCompletedTodos()
  }

  const { type, setType } = props
  const Filters = ['all', 'active', 'completed'].map(filter => {
    return (
      <Filter
        filterType={filter}
        key={filter}
        selectedType={type}
        setType={setType}
      />
    )
  })

  const { items } = props

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{ items }</strong> item left
      </span>
      <ul className="filters">
        { Filters }
      </ul>
      <button className="clear-completed" onClick={handleClick}>Clear completed</button>
    </footer>
  )
}

export default Footer
