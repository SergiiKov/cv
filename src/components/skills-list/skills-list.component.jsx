import React from 'react';
import SkillCard from '../skill-card/skill-card.component';

import './skills-list.styles.scss'

const SkillsList = ({ skills }) => {
  return(
    <div className='skills-list'>
       {
         skills.map( (user, i) =>{
          return(
            <SkillCard
            key={i} 
            id={skills[i].id}  
            name={skills[i].name} 
            webSite={skills[i].webSite}
            href={skills[i].href}
             />
          );
      })
       }
    </div>
  )
}

    
   



export default SkillsList;