import TodoContext from '../context/todo/todoContext';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo }) => {
  const todoContext = useContext(TodoContext);
  const { updateTodo, deleteTodo } = todoContext;
  const { task, completed, _id } = todo;

  const onChange = e => {
    updateTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const toggleCheckbox = e => {
    let completed = 'true';
    if (todo.completed) {
      completed = 'false';
    }
    updateTodo({ ...todo, [e.target.name]: completed });
  };

  const onDelete = e => {
    deleteTodo(_id);
  };

  return (
    <div className='todo'>
      <p>
        <input
          type='checkbox'
          name='completed'
          onChange={toggleCheckbox}
          checked={completed}
        />
        <input
          type='text'
          name='task'
          value={task}
          onChange={onChange}
          style={{ textDecoration: completed ? 'line-through' : 'none' }}
        />
        <button onClick={onDelete}>
          <i className='fa fa-minus' />
        </button>
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
