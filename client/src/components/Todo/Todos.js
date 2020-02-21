import React, { useContext, useEffect, Fragment } from 'react';
import TodoItem from './TodoItem';
import TodoContext from '../context/todo/todoContext';
import Spinner from '../layout/Spinner';
const Todos = () => {
  const todoContext = useContext(TodoContext);
  const { todos, getTodos, loading } = todoContext;

  useEffect(() => {
    getTodos();
  });

  if (todos !== null && todos.length === 0 && !loading) {
    return <h4>Please add a task</h4>;
  }
  return (
    <Fragment>
      {todos !== null && !loading ? (
        todos.map(todo => <TodoItem key={todo._id} todo={todo} />)
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Todos;
