import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    margin: 'auto',
  };
  const listStyle = {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
  };
  return (
    <div className="nav-bar">
      <header style={navStyle}>
        <h1>Bookstore</h1>
        <ul style={listStyle}>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/Categories">Categories</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
