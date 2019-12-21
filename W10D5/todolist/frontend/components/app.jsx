import React from 'react'
import TodoListContainers from './todos/todo_list_containers'
import {TodoList} from './todos/todo_list'

const App = () => {
  return (
    <div>
    <h1>NameofYourApp</h1>
      <TodoListContainers />
    </div>
  )
}

export default App;