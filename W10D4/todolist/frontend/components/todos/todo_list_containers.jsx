import { Connect } from 'react-redux'
import React from 'react'
import Presentation from './todo_list'
import { allTodos } from '../../reducers/selectors'

const mapStateToProps=({state})=>({
  todos:allTodos(state)
})

const mapDispatchToProps=()=>({
  receiveTodo: todo => dispatch(receiveTodo(todo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);