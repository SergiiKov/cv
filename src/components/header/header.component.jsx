import React from 'react';
import { Link } from 'react-router-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <FontAwesomeIcon icon={faHome} />
      </Link>
    </div>
  </div>
  );
};

export default Header;