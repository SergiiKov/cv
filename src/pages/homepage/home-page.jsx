import React from 'react';
import photoMy from '../../img/MyPhoto.jpg'; 
import photoMy2 from '../../img/DSC_4725.jpg';

import '../homepage/home-page.styles.scss';

class HomePage extends React.Component { 
    constructor(){
        super();
    } 

    render(){
        return(
            <div className='home-page'>
               <   img src={photoMy2} alt="Sergii Kovtun" className='photo' />
              <div className='tewr'>           
                  Hi, I'm Kovtun Sergii a software engineer with over four years IT industry experience, that wants to evolve in the field of web development.
      I want to try something new and ready to work hard to learn it. 
      </div>
    
            </div>
            );
    }
   
    };

export default HomePage;
 

