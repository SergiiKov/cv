import React from 'react';

import WorkExperience from '../../components/homepage-item/work-experience';
import Summary from '../../components/homepage-item/summary';
import ProfessionalSkills from '../../components/homepage-item/professional-skills';
import Education from '../../components/homepage-item/education';
import PhotoMain from '../../components/homepage-item/photo.component';
import TestLogo from '../../components/homepage-item/logo-svg.component';

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
          <PhotoMain />
          <TestLogo />
          <Summary />
          <WorkExperience />
          <ProfessionalSkills />
          <Education />
        </div>
    )
}
}

export default Directory;