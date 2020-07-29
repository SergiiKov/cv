import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Title from '../../components/ui/title';
import TextBody2 from '../../components/ui/TextBody2';
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
       <TextBody2>2008-2013. Vinnytsia National Technical University.</TextBody2>
       <TextBody2>Faculty of Information Technologies and Computer Engineering.</TextBody2>
       <TextBody2>Specialty - computer systems and networks</TextBody2>                         
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
                        Developed and maintained a web site of company.     
     </Box>
     <SubTitle>Professional Skills</SubTitle>
     <Box className={classes.boxP}>
       <TextBody2> Knowledge of: HTML, CSS, JS, ReactJS, Bootstrap, Material-UI</TextBody2>
       <TextBody2> Basic Knowledge of: PHP, MySql, Firebase</TextBody2>
      <TextBody2>Understanding: NPM, Webpack, Gulp, Git, GitHub, Adobe Photoshop</TextBody2>
      <TextBody2>Knowledge of CMS Wordpress, Joomla</TextBody2>
      <TextBody2>Knowledge of English on the Pre-Intermediate level (Read/Write) </TextBody2>  
     </Box>
     </CardContent>
   </Card>
<ResumeUI />
</React.Fragment>
      );
}

export default ResumePageUi;