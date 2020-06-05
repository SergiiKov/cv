import React from 'react';
import logo from '../../img/logo.svg';

import './logo-svg.styles.scss'

function TestLogo() {
  return (
    <div className=''>
    <img src={logo} className="logo" alt="logo" />
    </div>
  );
}

export default TestLogo;