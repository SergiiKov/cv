import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { light } from '@material-ui/core/styles/createPalette';

import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Typography from '@material-ui/core/Typography';


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


const Header2 = () => {
  const [theme, toggleDarkMode] = useDarkMode()
  const themeConfig = createMuiTheme(theme)

  return (
      <MuiThemeProvider theme={themeConfig}>
                <AppBar position="static">
            <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
                News
            </Typography>
            <Button color="inherit">Login</Button>
        
            <FormControlLabel control={<Switch onClick={toggleDarkMode}/>} />
            </Toolbar>
        </AppBar>
      </MuiThemeProvider>  
      );
}

export default Header2;

