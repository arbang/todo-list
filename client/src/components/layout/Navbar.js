import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar'>
      <h1>
        <i className={icon} /> {title}
      </h1>

      <Link to='/'>Home</Link>
      <Link to='/About'>About</Link>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Todo List',
  icon: 'far fa-list-alt'
};

export default Navbar;
