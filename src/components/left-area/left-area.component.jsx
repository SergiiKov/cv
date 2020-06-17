import React from 'react';
import photoMy from '../../img/MyPhoto.jpg'; 
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
                <p>Email: sergiikovtun.vn@gmail.com</p>
                <p>I'm a software engineer with over four years IT industry experience,
                that wants to evolve in the field of web development.
                I want to try something new and ready to work hard to learn it.</p>
                <button>Read more</button>
                <p>links</p>    
            <div>
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faEnvelope} />
            </div>
        </div>
    )
};

export default LeftArea;