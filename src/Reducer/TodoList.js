const initState = {
  todos: [],
  loading: false
};

const TodoList = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const todos = [...state.todos];
      todos.push(action.payload);

      return { ...state, todos: todos };
    case "DELETE_TODO":
      const newTodos = state.todos.filter(el => el.id !== action.payload);

      return { ...state, todos: newTodos };
    case "GET_DATA":
      let newTodoList = [];

      for (let key in action.payload) {
        let newTodo = {
          id: key,
          data: action.payload[key]
        };
        newTodoList.push(newTodo);
      }
      return { ...state, todos: newTodoList };
    default:
      return state;
  }
};
export default TodoList;
