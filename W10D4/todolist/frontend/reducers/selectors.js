import React from 'react'

export const allTodos=(state)=>{
  let keyList=Object.keys(state.todos);
  let arr= keyList.map(id=>{
    return state.todos[id]
  })
  return arr;
}