import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import '../links-component/links-component.styles.scss';

const LinksComponent = () =>{
    return(
        <div className='links-container'>  
            <div className='icons-container'>
            <a href='https://www.linkedin.com/in/sergii-kovtun-1b97881a2/'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href='https://github.com/SergiiKov'><FontAwesomeIcon icon={faGithub} /></a>
            <a href='https://www.facebook.com/profile.php?id=100017264941501'><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="mailto:sergiikovtun.vn@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
        </div>
    );
};

export default LinksComponent;