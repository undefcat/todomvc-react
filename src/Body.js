import React, { useState } from 'react'
import Todo from './Todo'

function Body(props) {
  const { todos, removeTodo, toggleTodo, changeTitleTodo } = props
  const TodoList = todos.map(todo => (
    <Todo
      changeTitleTodo={changeTitleTodo}
      key={todo.id}
      removeTodo={removeTodo}
      toggleTodo={toggleTodo}
      todo={todo} />
    ))

  const { toggleAllTodo } = props
  const [ toggleAll, setToggleAll ] = useState(false)
  function handleChange(e) {
    setToggleAll(e.target.checked)
    toggleAllTodo(e.target.checked)
  }

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        value={toggleAll}
        onChange={handleChange}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        { TodoList }
      </ul>
    </section>
  )
}

export default Body
