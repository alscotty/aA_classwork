import {combineReducers} from 'redux'
import {todosReducer} from './todo_reducer'


export const rootReducer = combineReducers({
  todos: todosReducer

})


