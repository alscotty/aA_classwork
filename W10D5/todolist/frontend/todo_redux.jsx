import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from "redux";
import configureStore from './store/store'
import {rootReducer} from './reducers/root_reducer'
import { receivedTodos } from './actions/todo_actions'
import { receivedTodo } from './actions/todo_actions'
import App from './components/app'
import Root from './components/root'
import {allTodos} from './reducers/selectors.js'
import TodoListContainers from './components/todos/todo_list_containers'
import TodoList from './components/todos/todo_list'

//On DOM load
document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  //Alias
  window.allTodos=allTodos;
  window.store = store;
  window.receivedTodos = receivedTodos;
  window.receivedTodo = receivedTodo;
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, rootEl);
  
});
