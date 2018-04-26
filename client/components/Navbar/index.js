import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/postings'>Postings</NavLink>
      </nav>
    </div>
  )
}

export default Navbar;