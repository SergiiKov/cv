
import React from 'react';

// import SearchBox from '../../components/serch-box/serch-box.component';
// import Scroll from '../../components/scroll/scroll.component';

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
    <div className="">
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
        searchField:'',
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
  
    handleChange = e => {
      this.setState({searchField: e.target.value});
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
                    <p>Knowledge of: HTML, CSS, Bootstrap, Material Design
                        Basic Knowledge of: PHP, MySql, JS, JQ, ReactJS
                        Understanding: NPM, Gulp, Git, GitHub
                        Knowledge of CMS Wordpress, Joomla
                        Knowledge of Adobe Photoshop
                        Knowledge of English on the Pre-Intermediate level (Read/Write)
                    </p>

                      <UI setCategory={this.setCategory} state={this.state} /> 
                    </div>
        </React.Fragment>
      )
    }
  }
  
  // get unique category items
  const uniqueItems = (x, i, a) => a.indexOf(x) === i;
  const PRODUCT_CATEGORIES = skills.map(prod => prod.category).filter(
    uniqueItems
  );
  
  PRODUCT_CATEGORIES.push("All");
  PRODUCT_CATEGORIES.sort();
    
  export default ResumePage ;