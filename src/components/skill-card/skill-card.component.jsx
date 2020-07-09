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
                    <a href={href}>{'Cайт: ' + webSite}</a>
               </div>
                
            </div>
       </a> 
    )
};

export default SkillCard;