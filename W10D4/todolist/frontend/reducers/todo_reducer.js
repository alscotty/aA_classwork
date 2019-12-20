import {RECEIVE_TODOS} from './../actions/todo_actions'
import {RECEIVE_TODO} from './../actions/todo_actions'



// reducers/todos_reducer.js
const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};




// nextState[todo.id]=todo
//next

export const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  const nextState=Object.assign({},state);

  switch (action.type) {
    case RECEIVE_TODOS:
    action.todos.forEach((todo,i)=>{
      nextState[todo.id]=todo
    })
      return nextState;
    case RECEIVE_TODO:
      nextState[action.todo.id]=action.todo;
      return nextState;
    default:
      return state;
  }
};

// export default todosReducer;