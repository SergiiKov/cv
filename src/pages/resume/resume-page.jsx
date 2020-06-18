import React from 'react';

import '../resume/resume-page.styles.scss';

const ResumePage = () =>{
    return(
        <div className='resume-page'>
            <h2>Education</h2>
                <p>2008-2013. Vinnytsia National Technical University.<br />
                Faculty of Information Technologies and Computer Engineering.<br />
                Specialty - computer systems and networks.</p> 
      
            <h2>Work Experience</h2>
                <p>Mar.2016 - Feb.2020 Regional organization Vinnytsia
                Information-analytical center as software engineer.
                Maintenance of  computer systems and networks. Analyzed, and
                tested applications and system software for user compatibility.
                Installed, configured, and routinel upgraded software and
                hardware forend-users. Performed network support tasks for WAN,
                LAN. Repair and maintenance computer and peripheral equipment.</p> 
                  
            <h2>Professional Skills</h2>
                <p>Knowledge of: HTML, CSS, Bootstrap, Material Design
                Basic Knowledge of: PHP, MySql, JS, JQ, ReactJS
                Understanding: NPM, Gulp, Git, GitHub
                Knowledge of CMS Wordpress, Joomla
                Knowledge of Adobe Photoshop
                Knowledge of English on the Pre-Intermediate level (Read/Write)</p>  
        </div>
    )
};

export default ResumePage;