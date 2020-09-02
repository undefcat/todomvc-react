import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

let uniqId = 0

function App() {

  const [ todos, setTodos ] = useState([])
  function addTodo(title) {
    const todo = {
      id: uniqId++,
      title,
      completed: false,
    }

    setTodos([...todos, todo])
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const [ type, setType ] = useState('all')
  function filterTodos() {
    switch (type) {
      case 'active':
        return todos.filter(todo => !todo.completed)

      case 'completed':
        return todos.filter(todo => todo.completed)

      case 'all':
      default:
        return todos
    }
  }

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }

      return todo
    }))
  }

  function changeTitleTodo(id, title) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }

      return todo
    }))
  }

  function toggleAllTodo(checked) {
    setTodos(todos.map(todo => {
      todo.completed = checked

      return todo
    }))
  }

  function clearCompletedTodos() {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const filteredTodos = filterTodos()

  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <Body
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        toggleAllTodo={toggleAllTodo}
        changeTitleTodo={changeTitleTodo}
        todos={filteredTodos}
      />
      <Footer
        clearCompletedTodos={clearCompletedTodos}
        setType={setType}
        type={type}
        items={filteredTodos.length}
      />
    </section>
  )
}

export default App
