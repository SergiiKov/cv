import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SubTitle from '../../components/ui/sub-title';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import SkillsList from '../../components/skills-list/skills-list.component';
import '../resume/resume-page.styles.scss';
import { skills } from '../../components/skills';

const useStyles = makeStyles(theme=>({
    cardMargin:{
      marginTop: '20px',
      marginLeft: '20px',
      marginRight: '20px',
      [theme.breakpoints.down("md")]: {
        marginTop: '20px',
        marginLeft: '20px'
      },
      [theme.breakpoints.down("xs")]: {
        margin: '0px'
      }
    },
    tab: {
      marginTop: '20px'
    }
  }));

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
  }) => {
    const classes = useStyles();
    return(
  <Card className={classes.cardMargin} square>
     <CardContent>
    <SubTitle>Skills</SubTitle>
    <div className='buttons-container'>
        {ButtonCategories(productCategories, setCategory )}
        </div>
    <SkillsList state={state} />
     </CardContent>
   </Card> 
    )
  }
   
  class ResumeUI  extends React.Component {
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
            <UI setCategory={this.setCategory} state={this.state} />    
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
    
  export default ResumeUI;