import React from 'react';
import SearchBox from '../../components/serch-box/serch-box.component';
import Scroll from '../../components/scroll/scroll.component';
import SkillsList from '../../components/skills-list/skills-list.component';
import '../about/about-page.styles.scss';
import { skills } from '../../components/skills';

class AboutPage extends React.Component {
    constructor(){
        super();
        this.state = {
            searchField:'',
            skills: skills 
        }
    };
    
    handleChange = e => {
        this.setState({searchField: e.target.value});
    }
    render(){
        const { searchField } = this.state;
        const filterSkills= this.state.skills.filter(skill => 
            skill.name.toLowerCase().includes(searchField.toLowerCase()))
        return(
            <React.Fragment>
                <div className='about-page'>
                <h2>ABOUT ME</h2>
                <p>Hi, I'm Kovtun Sergii a software engineer with over four years IT industry experience, that wants to evolve in the field of web development.</p> 
                <p>I want to try something new and ready to work hard to learn it.</p>
                <h3>SOME STATS ABOUT ME</h3>
                <p>Current age:</p>
                <p>Current city:</p>
                <p>Marital status: link</p>
                        <SearchBox
                            placeholder='skill' 
                            handleChange={this.handleChange}
                        /> 
                        <SkillsList skills={filterSkills} />
                    {/* <Scroll></Scroll> */}
                </div>       
            </React.Fragment>
            
        )
    }
};

export default AboutPage;