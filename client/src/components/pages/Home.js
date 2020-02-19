import React from 'react';
import Todos from '../Todo/Todos';
import TodoForm from '../Todo/TodoForm';

const Home = () => {
  return (
    <div className='container'>
      <div>
        <TodoForm />
      </div>
      <div>
        <Todos />
      </div>
    </div>
  );
};

export default Home;
