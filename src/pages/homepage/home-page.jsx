import React from 'react';

import '../homepage/home-page.styles.scss';

class HomePage extends React.Component { 
    constructor(){
        super();
    } 

    render(){
        return(
            <div className='home-page'>
                <h2>ABOUT THIS SITE</h2>
                <h3>A BEAUTIFUL, RESPONSIVE, REACT APP WRITTEN WITH MODERN JAVASCRIPT.</h3>
                <p>This is react website created to introduce me and my skills in web development (and my skills in english).</p>
                <p>Source available <a href='https://github.com/SergiiKov/cv.git'>here.</a></p>
                    <div>
                        <p>It's just a string</p>
                        <p>This string randomly changes color.</p>
                    </div>
            </div>
            );
    }
   
    };

export default HomePage;
 

