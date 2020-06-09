import React from 'react';

import Resume from '../resume/resume.component';
import PhotoMain from '../../components/homepage-item/photo.component';
// import TestLogo from '../../components/homepage-item/logo-svg.component';
import Header from '../header/header.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
         this.state = {
          
    
         }
    }
render() {
    return (
        <div className='directory-menu'>
            <Header />
          <PhotoMain />
          <Resume />
          {/* <TestLogo /> */}
        
        </div>
    )
}
}

export default Directory;