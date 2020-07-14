import React, {useState} from 'react';

import {  MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  cardMargin:{
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px'
  },
  tab: {
    marginTop: '20px',
    marginBottom: '10px',
  }
});

const themeObject = {
  palette: {
    primary: {
      main: '#053f5b',
    },
    secondary: {
      main: '#5e3c6f',
    },
    type:'dark'
  }
}

const useDarkMode = () =>{
const [theme, setTheme] = useState(themeObject)
const { palette: { type } } = theme;

const toggleDarkMode = () => {
  const updateTheme = {
    ...theme,
    palette: {
      ...theme.palette,
      type: type === 'light' ? 'dark' : 'light'
    }
  }
  setTheme(updateTheme)
}
return [theme, toggleDarkMode]
}

const AboutPage = () => {
  const classes = useStyles();
  const [theme, toggleDarkMode] = useDarkMode()
  const themeConfig = createMuiTheme(theme)
  console.log(theme);
 
  return (
      <MuiThemeProvider theme={themeConfig}>
       <React.Fragment>
   <Card className={classes.cardMargin}>
       <CardContent>
       < FormControlLabel control={<Switch onClick={toggleDarkMode}/>} />
          <Typography variant='h4'>
          ABOUT ME
          </Typography>

          <Typography variant="body1" className={classes.tab}>
          Hi, I'm Kovtun Sergii a software engineer with over four years IT industry experience, that wants to evolve in the field of web development.
          I want to try something new and ready to work hard to learn it.        
          </Typography>
          
          <Typography variant='h5' className={classes.tab}>
          Some stats about me
          </Typography>

          <Typography variant="body1">
          Current age: 29
          </Typography>

          <Typography variant="body1">
          Current city: Vinnitsa
          </Typography>
          
          <Typography variant="body1">
          Marital status: один
          </Typography>
       </CardContent>
   </Card>
       </React.Fragment>
      </MuiThemeProvider>  
      );
}

export default AboutPage;