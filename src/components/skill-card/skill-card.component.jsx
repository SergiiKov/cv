import React from 'react';

import './skill-card.styles.scss'

const SkillCard = (props) =>{
    const { name, webSite, id, href } = props;
    return(
       <a href={href} target="_blank" rel="noopener noreferrer">
            <div className='card-container'>
                {/* <img src={require(`../../img/${id}.png`)} alt='district card' className='img-district' /> */}
               <div className='card-text-container'>
                <h2>{'Назва: ' + name}</h2>
                <hr className='style1' />
                    <a href={href}>{'Cайт: ' + webSite}</a>
               </div>
                
            </div>
       </a> 
    )
};

export default SkillCard;