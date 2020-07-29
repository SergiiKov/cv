import React from 'react';

import '../homepage/home-page.styles.scss';

class HomePage extends React.Component { 
    constructor(){
        super();
    } 

    render(){
        return(
            <div className='home-page'>
                <p>Kovtun Sergii </p> 
                <p>Personal Website</p> 
                <p>in the process of developing</p> 
            </div>
        );
    } 
};

export default HomePage;
 

