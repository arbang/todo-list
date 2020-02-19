import React, { useState, useContext } from 'react';
import TodoContext from '../../components/context/todo/todoContext';

const TodoForm = () => {
  const todoContext = useContext(TodoContext);
  const { addTodo } = todoContext;
  const [todo, setTodo] = useState({
    task: '',
    completed: false
  });

  //   useEffect(() => {
  //     setTodo({
  //       task: '',
  //       completed: false
  //     });
  //   }, [todoContext]); //dependencies

  const { task } = todo;

  const onSubmit = e => {
    e.preventDefault();
    addTodo(todo);
    setTodo({ task: '', completed: false });
  };

  const onChange = e => setTodo({ ...todo, [e.target.name]: e.target.value });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='task'
          placeholder='new task'
          value={task}
          onChange={onChange}
        />
        <button type='submit' value='submit' disabled={!task}>
          <i className='fas fa-plus'></i>
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
