import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import {  MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Title from '../../components/ui/title';
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
    fontSize: '1.4em',
    fontWeight: '500',
    marginleft: '20px',
    letterSpacing: '.25em',
    lineHeight: '1.5',
  },
  boxP: {
    fontFamily: "Roboto",
    fontSize: '1em',
    fontWeight: '400',
    marginleft: '20px'
  }
}));


const AboutPage = () => {
  const classes = useStyles();

  return (
       <React.Fragment>
<Card className={classes.cardMargin} square >
  <CardContent>
    <Title>ABOUT ME</Title> 
    <Box elevation={0} className={classes.boxP}>
      Hi, I'm Kovtun Sergii a software engineer with over four years IT industry experience, that wants to evolve in the field of web development.
      I want to try something new and ready to work hard to learn it.    
    </Box>
    <Box className={classes.boxH3}>
      Some stats about me
    </Box>
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

   <Card className={classes.cardMargin} square>
     <CardContent>
     <Title>ABOUT THIS SITE</Title>
    <Box className={classes.boxH3}>A beautiful, responsive, React app written with modern JavaScript.</Box>
     <Box className={classes.boxP}>
       Welcome to my website. Please feel free to read more <Link color="primary" to="/about">about me</Link>, or you can check out <Link to="/resume"> my resume</Link>, <Link to="/projects">my projects</Link>, or <Link to="/contact">contact me</Link>.
     </Box>
    <Box className={classes.boxP}>
      This is react website created to introduce me and my skills in web development (and my skills in english).
     </Box>
     </CardContent>
   </Card>
       </React.Fragment>
     
      );
}

export default AboutPage;