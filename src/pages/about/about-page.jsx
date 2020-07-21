import React, {useState} from 'react';

import {  MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
  }
}));


const AboutPage = () => {
  const classes = useStyles();

  return (
       <React.Fragment>
   <Card className={classes.cardMargin} square >
       <CardContent>
          <Title>ABOUT ME</Title> 
    <Paper elevation={0} >
      Hi, I'm Kovtun Sergii a software engineer with over four years IT industry experience, that wants to evolve in the field of web development.
      I want to try something new and ready to work hard to learn it.    
    </Paper>
          <Paper variant='h5' className={classes.tab}>
          Some stats about me
          </Paper>
          <Paper variant="body1">
          Current age: 29
          </Paper>
          <Paper variant="body1">
          Current city: Vinnitsa
          </Paper>
          <Paper variant="body1" elevation={0}>
          Marital status: один
          </Paper>
       </CardContent>
   </Card>
       </React.Fragment>
     
      );
}

export default AboutPage;