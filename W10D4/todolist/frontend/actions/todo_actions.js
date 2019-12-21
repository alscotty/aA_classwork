export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receivedTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos: todos
});

export const receivedTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo: todo
});