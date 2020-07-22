import React from 'react';

import SkillsList from '../../components/skills-list/skills-list.component';
import '../resume/resume-page.styles.scss';
import { skills } from '../../components/skills';

  const ButtonCategory = ({ setCategory, category }) => (  
        <button className={'button-filter'} onClick={() => setCategory(category)}>
         {category}
        </button>
  );
  
  const ButtonCategories = (productCategories, setCategory ) => (
    productCategories.map((category,i) => (
          <ButtonCategory key={category} setCategory={setCategory} category={category} />
        ))
  );

  const UI = ({
    state,
    state: { productCategories },
    setCategory,
    allProducts
  }) => (
    <div>
      <div>
        <h3>SKILLS</h3>
        {ButtonCategories(productCategories, setCategory )}
      </div>
      <div >
        <SkillsList state={state} />
      </div>
    </div>
  );
  
  class ResumePage  extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        displayCategory: "All",
        skills: skills,
        productCategories: PRODUCT_CATEGORIES
      };
      this.setCategory = this.setCategory.bind(this);
    }

    setCategory(category) {
      this.setState({
        displayCategory: category
      });
    }

    render() {   
      return (
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
                    <ul className='list-skills'>
                      <li>Knowledge of: HTML, CSS, JS, ReactJS, Bootstrap, Material-UI</li>
                      <li>Basic Knowledge of: PHP, MySql</li>
                      <li>Understanding: NPM, Webpack, Gulp, Git, GitHub, Adobe Photoshop</li>
                    <li>Knowledge of CMS Wordpress, Joomla</li>
                    <li>Knowledge of English on the Pre-Intermediate level (Read/Write)</li>
                    </ul>
                      <UI setCategory={this.setCategory} state={this.state} /> 
                    </div>
        </React.Fragment>
      )
    }
  }
  
  const uniqueItems = (x, i, a) => a.indexOf(x) === i;
  const PRODUCT_CATEGORIES = skills.map(prod => prod.category).filter(
    uniqueItems
  );
  
  PRODUCT_CATEGORIES.push("All");
  PRODUCT_CATEGORIES.sort();
    
  export default ResumePage ;