import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';
import logo from '../img/weatherlogo.png'

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark fondo">
      <Link to='/' className='link'>
        <span className="navbar-brand logo-container">
          <img src={logo} width="30" height="30" className="d-inline-block align-top logo" alt="" />
          Weatherpp
        </span>
      </Link>
      <Link to='/about' className='link'>
        <span className="about">About</span>
      </Link>
        <SearchBar onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
