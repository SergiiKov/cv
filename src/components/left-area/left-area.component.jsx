import React from 'react';
import photoMy from '../../img/MyPhoto.jpg'; 
import CustomButton from '../custom-button/custom-button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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
                <div className='links-container'>
                <h3>Links:</h3>    
                    <div className='icons-container'>
                    <a href='https://www.linkedin.com/in/sergii-kovtun-1b97881a2/'><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href='https://github.com/SergiiKov'><FontAwesomeIcon icon={faGithub} /></a>
                    <a href='https://www.facebook.com/profile.php?id=100017264941501'><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="mailto:sergiikovtun.vn@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                    </div>
            </div>
        </div>
    )
};

export default LeftArea;