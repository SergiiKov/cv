
import React from 'react';
import SearchBox from '../../components/serch-box/serch-box.component';
import Scroll from '../../components/scroll/scroll.component';
import SkillsList from '../../components/skills-list/skills-list.component';
import '../resume/resume-page.styles.scss';
import { skills } from '../../components/skills';



class ResumePage extends React.Component {
   
      state = {
            searchField:'',
            skills: skills 
        }

    
    handleChange = e => {
        this.setState({searchField: e.target.value});
    }


    render(){
        const { searchField } = this.state;
        const filterSkills= this.state.skills.filter(skill => 
            skill.name.toLowerCase().includes(searchField.toLowerCase()))
        return(
            <React.Fragment>
                <div className='resume-page'>
                    <h2>My resume</h2>
                    <h3>Education</h3>
                    <p>  2008-2013. Vinnytsia National Technical University.<br />
                        Faculty of Information Technologies and Computer Engineering.<br />
                        Specialty - computer systems and networks.</p> 
                    <h3>   Work Experience</h3>
                    <p> Mar.2016 - Feb.2020 Regional organization Vinnytsia
                        Information-analytical center as software engineer.
                        Maintenance of  computer systems and networks. Analyzed, and
                        tested applications and system software for user compatibility.
                        Installed, configured, and routinel upgraded software and
                        hardware forend-users. Performed network support tasks for WAN,
                        LAN. Repair and maintenance computer and peripheral equipment.</p>
                    <h3> Professional Skills </h3>
                    <p>Knowledge of: HTML, CSS, Bootstrap, Material Design
                        Basic Knowledge of: PHP, MySql, JS, JQ, ReactJS
                        Understanding: NPM, Gulp, Git, GitHub
                        Knowledge of CMS Wordpress, Joomla
                        Knowledge of Adobe Photoshop
                        Knowledge of English on the Pre-Intermediate level (Read/Write)</p>
                    
                        <SearchBox
                            placeholder='skill' 
                            handleChange={this.handleChange}
                        /> 
                     

                    <Scroll>
                    <SkillsList skills={filterSkills} /> 
                    </Scroll>
                </div>       
            </React.Fragment>
            
        )
    }
};

export default ResumePage;