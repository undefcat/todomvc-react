import React, { useState, useRef, useLayoutEffect } from 'react'

function Todo(props) {

  const { todo } = props

  let className = ''
  if (todo.completed) {
    className = 'completed'
  }

  const [ editing, setEditing ] = useState(false)
  if (editing) {
    className = 'editing'
  }

  const { toggleTodo } = props
  function handleChange() {
    toggleTodo(todo.id)
  }

  function handleDoubleClick() {
    if (todo.completed) {
      return
    }

    if (!editing) {
      setEditTitle(todo.title)
      setEditing(true)
      return
    }

    done()
  }

  const editInputEl = useRef(null)
  useLayoutEffect(() => {
    editInputEl.current.focus()
  }, [ editing ])

  const { removeTodo } = props

  function handleClick() {
    removeTodo(todo.id)
  }

  const [ editTitle, setEditTitle ] = useState('')

  function handleEditChange(e) {
    setEditTitle(e.target.value)
  }

  function handleEditKeyPress(e) {
    if (e.key === 'Enter') {
      done()
    }
  }

  function handleEditBlur() {
    if (!editing) {
      return
    }

    done()
  }

  const { changeTitleTodo } = props
  function done() {
    changeTitleTodo(todo.id, editTitle)
    setEditing(false)
  }

  return (
    <li className={className}>

      <div className="view">
        <input
          checked={todo.completed}
          className="toggle"
          onChange={handleChange}
          type="checkbox"
        />
        <label onDoubleClick={handleDoubleClick}>{ todo.title }</label>
        <button className="destroy" onClick={handleClick} />
      </div>

      <input
        className="edit"
        value={editTitle}
        onChange={handleEditChange}
        onKeyPress={handleEditKeyPress}
        onBlur={handleEditBlur}
        ref={editInputEl}
      />
    </li>
  )
}

export default Todo
