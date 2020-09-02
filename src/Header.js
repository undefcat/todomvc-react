import React, { useState } from 'react'

function Header(props) {

  const [ inputValue, setInputValue ] = useState('')
  function handleChange(e) {
    setInputValue(e.target.value)
  }

  const { addTodo } = props
  function handleKeyPress(e) {
    if (e.key !== 'Enter') {
      return
    }

    if (e.target.value.trim() === '') {
      setInputValue('')
      return
    }

    addTodo(inputValue)
    setInputValue('')
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        autoFocus
        className="new-todo"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="What needs to be done?"
        value={inputValue}
      />
    </header>
  )
}

export default Header
