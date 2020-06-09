import React from 'react';

import './header.style.scss';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Kovtun Sergii
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;