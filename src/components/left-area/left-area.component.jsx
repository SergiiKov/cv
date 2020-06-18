import React from 'react';
import photoMy from '../../img/MyPhoto.jpg'; 
import CustomButton from '../custom-button/custom-button.component';
import LinksComponent from '../links-component/links-compnent';

import '../left-area/left-area.styles.scss';

const LeftArea = () => {
    return(
        <div className='left-area'>
                {<img src={photoMy} alt="Sergii Kovtun"  className='photo-container'/>}
                <h2>Kovtun Sergii</h2>
                <p id='mail'>Email: sergiikovtun.vn@gmail.com</p>
                <h3>About</h3>
                <p>Hi, I'm Kovtun Sergii a software engineer with over four years IT industry experience,
                that wants to evolve in the field of web development.
                I want to try something new and ready to work hard to learn it.</p>
                <CustomButton />
                <LinksComponent />
           
        </div>
    )
};

export default LeftArea;