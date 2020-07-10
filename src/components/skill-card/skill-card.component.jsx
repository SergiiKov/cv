import React from 'react';

import './skill-card.styles.scss'

const SkillCard = (props) =>{
    const { name, webSite, id, href } = props;
    return(
       <a href={href} target="_blank" rel="noopener noreferrer">
            <div className='card-container'>
                <img src={require(`../../img/${id}.svg`)} alt='skill card' className='img-skill' />
               <div className='card-text-container'>
                    <h2>{ name }</h2>
                    <p>{webSite}</p>
                    <div className="skill-bar">
                         <div className='skillbar-title' >
                              HTML
                         </div>
                         <div className='skillbar-persent' >
                               10/10
                         </div>
                    </div>
               </div>
              
            </div>

       </a> 
    )
};

export default SkillCard;