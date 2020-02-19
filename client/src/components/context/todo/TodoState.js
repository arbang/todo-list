import React, { useReducer } from 'react';
import uuid from 'uuid';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';

import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../types';
const TodoState = props => {
  const initialState = {
    todos: [
      {
        id: 1,
        task: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        task: 'Make Dinner',
        completed: false
      },
      {
        id: 3,
        task: 'Bring the keys',
        completed: true
      }
    ]
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);
  //Add todo
  const addTodo = todo => {
    todo.id = uuid.v4();
    dispatch({ type: ADD_TODO, payload: todo });
  };

  //Update todo
  const updateTodo = todo => {
    dispatch({ type: UPDATE_TODO, payload: todo });
  };

  //Delete todo
  const deleteTodo = todo => {
    dispatch({ type: DELETE_TODO, payload: todo });
  };
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        updateTodo,
        deleteTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoState;
