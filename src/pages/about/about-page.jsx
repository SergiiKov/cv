import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import {  MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Title from '../../components/ui/title';

import SubTitle from '../../components/ui/sub-title';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


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


const AboutPage = () => {
  const classes = useStyles();

  return (
       <React.Fragment>
  <Card className={classes.cardMargin} square>
     <CardContent>
     <Title>ABOUT THIS SITE</Title>
    <SubTitle>A beautiful, responsive, React app written with modern JavaScript.</SubTitle>
     <Box className={classes.boxP}>
       Welcome to my website. Please feel free to read more about me, or you can check out my resume, my projects, or contact me.
     </Box>
    <Box className={classes.boxP}>
      This is react website created to introduce me and my skills in web development (and my skills in english).
     </Box>
     </CardContent>
   </Card>

<Card className={classes.cardMargin} square >
  <CardContent>
    <Title>ABOUT ME</Title> 
    <Box elevation={0} className={classes.boxP}>
      Hi, I'm Kovtun Sergii a software engineer with over four years IT industry experience, that wants to evolve in the field of web development.
      I want to try something new and ready to work hard to learn it.    
    </Box>

    <SubTitle>
      Some stats about me
    </SubTitle>
    <Box className={classes.boxP}>
      Current age: 29
    </Box>
    <Box className={classes.boxP}>
      Current city: Vinnitsa
    </Box>
    <Box className={classes.boxP}>
      Marital status: один
    </Box>
  </CardContent>
  </Card>
</React.Fragment>
      );
}

export default AboutPage;