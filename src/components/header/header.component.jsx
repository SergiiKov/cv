import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.scss';

const Header = () => {
  return (
    <div className='header'>
    <Link className='logo-container' to='/'>
      main
      {/* <Logo className='logo' /> */}
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        About
      </Link>
      <Link className='option' to='/signin'>
        CONTACT
      </Link>
    </div>
  </div>
  );
};

export default Header;