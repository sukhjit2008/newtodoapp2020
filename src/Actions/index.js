// export const CreateTodo = value => {
//   console.log(value);
//   return {
//     type: "CREATE_TODO",
//     payload: value
//   };
// };
import axios from "axios";
export const CreateData = todo => dispatch => {
  axios
    .post(`https://dream-burger-87520.firebaseio.com/todos.json`, todo)
    .then(res => {
      dispatch(GetData());
    })
    .then(err => console.log(err));
};
export const GetData = todo => dispatch => {
  axios
    .get(`https://dream-burger-87520.firebaseio.com/todos.json`)
    .then(res => {
      dispatch({ type: "GET_DATA", payload: res.data });
    })
    .then(err => {
      return err;
    });
};

export const AddTodo = todo => {
  return {
    type: "ADD_TODO",
    payload: todo
  };
};
export const DelelteTodo = id => {
  return {
    type: "DELETE_TODO",
    payload: id
  };
};
