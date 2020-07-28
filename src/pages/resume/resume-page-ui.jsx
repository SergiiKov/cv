import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Title from '../../components/ui/title';

import SubTitle from '../../components/ui/sub-title';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import ResumeUI from './resume-ui';


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
  },
  boxH2: {
    fontFamily: "Roboto",
    fontSize: '1.6em',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginleft: '20px',
    paddingTop: '20px',
    letterSpacing: '.25em',
    lineHeight: '1.65',
  },
  boxH3: {
    fontFamily: "Roboto",
    fontSize: '1.2em',
    fontWeight: '400',
    marginleft: '20px',
    marginTop: '20px',
    marginBottom: '10px',
    letterSpacing: '.15em',
    lineHeight: '1.5',
  },
  boxP: {
    fontFamily: "Roboto",
    fontSize: '1em',
    fontWeight: '400',
    marginleft: '20px',
    lineHeight: '1.8'
  }
}));


const ResumePageUi = () => {
  const classes = useStyles();

  return (
       <React.Fragment>
  <Card className={classes.cardMargin} square>
     <CardContent>
     <Title>MY RESUME</Title>
    <SubTitle>Education</SubTitle>
     <Box className={classes.boxP}>
     2008-2013. Vinnytsia National Technical University.
                        Faculty of Information Technologies and Computer Engineering.
                        Specialty - computer systems and networks            
     </Box>
     <SubTitle>Work Experience</SubTitle>
     <Box className={classes.boxP}>
     Mar.2016 - Feb.2020 Regional organization Vinnytsia
                        Information-analytical center as software engineer.
                        Maintenance of  computer systems and networks. Analyzed, and
                        tested applications and system software for user compatibility.
                        Installed, configured, and routinel upgraded software and
                        hardware forend-users. Performed network support tasks for WAN,
                        LAN. Repair and maintenance computer and peripheral equipment.           
     </Box>
     <SubTitle>Professional Skills</SubTitle>
     <Box className={classes.boxP}>
     Knowledge of: HTML, CSS, JS, ReactJS, Bootstrap, Material-UI
                      Basic Knowledge of: PHP, MySql
                     Understanding: NPM, Webpack, Gulp, Git, GitHub, Adobe Photoshop
                   Knowledge of CMS Wordpress, Joomla
                    Knowledge of English on the Pre-Intermediate level (Read/Write)      
     </Box>
     </CardContent>
   </Card>
<ResumeUI />
</React.Fragment>
      );
}

export default ResumePageUi;