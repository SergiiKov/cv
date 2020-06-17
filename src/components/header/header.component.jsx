import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.scss';

const Header = () => {
  return (
    <div className='header'>
    <Link className='logo-container' to='/'>
      KOVTUN SERGII
    </Link>
    <div className='options'>
      <Link className='option' to='/about'>
        About
      </Link>
      <Link className='option' to='/resume'>
        Resume
      </Link>
      <Link className='option' to='/projects'>
        Projects
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
    </div>
  </div>
  );
};

export default Header;