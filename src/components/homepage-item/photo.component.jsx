import React from 'react';

import logo from '../../img/MyPhoto.jpg'; 

console.log(logo); // /logo.84287d09.png

function PhotoMain() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}
export default PhotoMain;