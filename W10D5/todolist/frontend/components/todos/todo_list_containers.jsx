import { connect } from 'react-redux'
import React from 'react'
import {TodoList} from './todo_list'
import {allTodos} from '../../reducers/selectors'

const mapStateToProps=(state)=>({
  todos: allTodos(state)
})

const mapDispatchToProps= dispatch =>({
  receivedTodo: todo => dispatch(receivedTodo(todo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);