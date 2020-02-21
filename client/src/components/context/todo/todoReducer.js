import { ADD_TODO, UPDATE_TODO, DELETE_TODO, GET_TODOS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        loading: false
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo._id === action.payload._id ? action.payload : todo
        ),
        loading: false
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload),
        loading: false
      };
    default:
      return state;
  }
};
