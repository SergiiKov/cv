import React from 'react';
import { Link } from 'react-router-dom';

import '../homepage/home-page.styles.scss';

class HomePage extends React.Component { 
    constructor(){
        super();
    } 

    render(){
        return(
            <div className='home-page'>
                <h2>ABOUT THIS SITE</h2>
                <h3>A beautiful, responsive, React app written with modern JavaScript.</h3>
                <p>Welcome to my website. Please feel free to read more about me, or you can check out my <Link to="/resume">resume</Link>, {' '}, projects, view site statistics, or contact me.</p>
                <p>This is react website created to introduce me and my skills in web development (and my skills in english).</p>
                <p>It's just a string</p>
                <p>Source available <a href='https://github.com/SergiiKov/cv.git'>here.</a></p>  
            </div>
            );
    }
   
    };

export default HomePage;
 

