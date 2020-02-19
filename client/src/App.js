import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import TodoState from './components/context/todo/TodoState';

function App() {
  return (
    <TodoState>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
          </Switch>
        </div>
      </Router>
    </TodoState>
  );
}

export default App;
