import React from 'react';

import './photo.styles.scss'
import photoMy from '../../img/MyPhoto.jpg'; 

function PhotoMain() {
  return ( 
  <div className=''>
    {<img src={photoMy} alt="Sergii Kovtun"  className='photo-container'/>}

  </div>
  )
   
  
}
export default PhotoMain;