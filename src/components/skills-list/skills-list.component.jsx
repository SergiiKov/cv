import React from 'react';
import SkillCard from '../skill-card/skill-card.component';

import './skills-list.styles.scss'

const SkillsList = ({ districts }) => {

  return(
    <div className='districts-list'>
       {
         districts.map( (user, i) =>{
          return(
            <SkillCard
            key={i} 
            id={districts[i].id}  
            name={districts[i].name} 
            webSite={districts[i].webSite}
            href={districts[i].href}
             />
          );
      })
       }
    </div>
)
}

    
   



export default SkillsList;