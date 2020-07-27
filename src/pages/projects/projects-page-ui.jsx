import React, {useState} from 'react';
import '../projects/projects-page.styles.scss'; 

import Link from '@material-ui/core/Link';
import {  MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
    padding: theme.spacing(1)
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


const ProjectPageUI = () => {
  const classes = useStyles();

  return (
       <React.Fragment>
  <Card className={classes.cardMargin} square>
     <CardContent>
     <Title>MY PROJECTS</Title>
    <SubTitle>Smp.vin.ua</SubTitle>
    <Link href='http://smp.vin.ua/joomla/' target="_blank" rel="noopener noreferrer">
     <div className='project-card-container'>
                        <img src={require(`../../img/smp.png`)} alt='smp.vin.ua' className='img-projects' />
                            <div className='projects-text-container'>
                                <Typography className={classes.tab}  variant='body2'>
                                  Офіційний сайт. Соціальна та молодіжна політика на Вінниччині
                                  </Typography>
                            </div>                       
                    </div>
                    </Link>  
     </CardContent>
   </Card>

   <Card className={classes.cardMargin} square>
     <CardContent>
    <SubTitle>Main-page iac</SubTitle>
    <Link href='http://smp.vin.ua/joomla/' target="_blank" rel="noopener noreferrer">
    <div className='project-card-container'>
                        <img src={require(`../../img/main-page.png`)} alt='main-page iac' className='img-projects' />
                            <div className='projects-text-container'>
                                <Typography className={classes.tab}  variant='body2'>Головна сторінка для сукупності сайтів соціальної політики Вінниччини. 
                                    ОКО Інформаційно-аналітичний центр з обслуговування установ соціального захисту населенн
                                </Typography>
                            </div>   
                    </div>
                    </Link>        
     </CardContent>
   </Card>

   <Card className={classes.cardMargin} square>
     <CardContent>
    <SubTitle>VN Create</SubTitle>
    <Link href='https://github.com/SergiiKov/vncreate' target="_blank" rel="noopener noreferrer">
                    <div className='project-card-container'>
                        <img src={require(`../../img/vncreate-1.png`)} alt='VN Create' className='img-projects' />
                        <img src={require(`../../img/vncreate-2.png`)} alt='VN Create' className='img-projects' />
                            <div className='projects-text-container'>
                                <Typography className={classes.tab}  variant='body2'p>Сайт візитка. Розробка сайту за бажанням клієнта з унікальним дизайном та можливостями. 
                                    Створення сайту на CMS WordPress, Joomla. 
                                </Typography>
                            </div>   
                    </div>
                </Link>
     </CardContent>
   </Card>

   <Card className={classes.cardMargin} square>
     <CardContent>
    <SubTitle>Robot-page</SubTitle>
    <Link href='https://github.com/SergiiKov/cards-friends' target="_blank" rel="noopener noreferrer">
                    <div className='project-card-container'>
                        <img src={require(`../../img/robot-friends.png`)} alt='robot-friends' className='img-projects' />
                            <div className='projects-text-container'>
                                <Typography className={classes.tab}  variant='body2'>
                                  React app that searches through an API of random robots
                                  </Typography>
                            </div>   
                    </div>
                </Link>
     </CardContent>
   </Card>

   <Card className={classes.cardMargin} square>
     <CardContent>
    <SubTitle>Todo List</SubTitle>
    <Link href='https://github.com/SergiiKov/My-ToDo-List' target="_blank" rel="noopener noreferrer">
                    <div className='project-card-container'>
                        <img src={require(`../../img/todolist.png`)} alt='todolist' className='img-projects' />
                            <div className='projects-text-container'>
                                <Typography className={classes.tab}  variant='body2'>
                                  A simple to-do list application built with React
                                </Typography>
                            </div>   
                    </div>
                </Link>
     </CardContent>
   </Card>

</React.Fragment>
      );
}

export default ProjectPageUI;