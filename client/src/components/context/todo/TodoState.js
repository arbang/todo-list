import React, { useReducer } from 'react';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import axios from 'axios';

import { ADD_TODO, UPDATE_TODO, DELETE_TODO, GET_TODOS } from '../types';
const TodoState = props => {
  const initialState = {
    todos: [],
    loading: true
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  //Get todo
  const getTodos = async () => {
    try {
      const res = await axios.get('/api/todos');
      dispatch({ type: GET_TODOS, payload: res.data });
    } catch (err) {}
  };
  //Add todo
  const addTodo = async todo => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/todos', todo, config);
      dispatch({ type: ADD_TODO, payload: res.data });
    } catch (err) {}
  };

  //Update todo
  const updateTodo = async todo => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.put(`/api/todos/${todo._id}`, todo, config);
      dispatch({ type: UPDATE_TODO, payload: res.data });
    } catch (err) {}
  };

  //Delete todo
  const deleteTodo = async id => {
    try {
      await axios.delete(`/api/todos/${id}`);
      dispatch({ type: DELETE_TODO, payload: id });
    } catch (err) {}
  };
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        addTodo,
        updateTodo,
        deleteTodo,
        getTodos
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoState;
