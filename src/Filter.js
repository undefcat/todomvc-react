import React from 'react'

function Filter(props) {
  const { filterType, selectedType, setType } = props

  const className = filterType === selectedType ? 'selected' : ''

  const title = filterType[0].toUpperCase() + filterType.substr(1)

  function handleClick(e) {
    e.preventDefault()

    setType(filterType)
  }

  return (
    <li>
      <a
        className={className}
        href="#"
        onClick={handleClick}
      >
        { title }
      </a>
    </li>
  )
}

export default Filter
