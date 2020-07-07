import React, {useState} from 'react';

import {  MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// import './header.style.scss';

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

const ResumePage = () => {
  const [theme, toggleDarkMode] = useDarkMode()
  const themeConfig = createMuiTheme(theme)
  console.log(theme);
 
  return (
      <MuiThemeProvider theme={themeConfig}>
       <React.Fragment>
   <Card>
       <CardContent>
       < FormControlLabel control={<Switch onClick={toggleDarkMode}/>} />
       <Typography>
       Education
       </Typography>
       <Typography>
                    2008-2013. Vinnytsia National Technical University.<br />
                    Faculty of Information Technologies and Computer Engineering.<br />
                    Specialty - computer systems and networks.
       </Typography>
       <Typography>
       Work Experience
       </Typography>
       <Typography>
       Mar.2016 - Feb.2020 Regional organization Vinnytsia
                    Information-analytical center as software engineer.
                    Maintenance of  computer systems and networks. Analyzed, and
                    tested applications and system software for user compatibility.
                    Installed, configured, and routinel upgraded software and
                    hardware forend-users. Performed network support tasks for WAN,
                    LAN. Repair and maintenance computer and peripheral equipment.
       </Typography>
       <Typography>
       Professional Skills
       </Typography>
       <Typography>
       Knowledge of: HTML, CSS, Bootstrap, Material Design
                    Basic Knowledge of: PHP, MySql, JS, JQ, ReactJS
                    Understanding: NPM, Gulp, Git, GitHub
                    Knowledge of CMS Wordpress, Joomla
                    Knowledge of Adobe Photoshop
                    Knowledge of English on the Pre-Intermediate level (Read/Write)
       </Typography>
       </CardContent>
   </Card>
       </React.Fragment>
      </MuiThemeProvider>  
      );
}

export default ResumePage;

