import {connect} from 'react-redux'
import React from 'react'
import {allTodos} from '../../reducers/selectors'
import TodoListItem from '../todo_list/todo_list_item'
import TodoForm from '../todo_list/todo_form'

export const TodoList = (handedDownProps) => {
  return (
    <div>
      <ul>
        {handedDownProps.todos.map((todo, index) => <TodoListItem todo={todo} key={index} />)}
      </ul>
      <TodoForm receivedTodo={handedDownProps.receivedTodo} />
    </div>
  )
}
