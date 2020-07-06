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

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
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


const HomePage2 = () => {
  const [theme, toggleDarkMode] = useDarkMode()
  const themeConfig = createMuiTheme(theme)
  console.log(theme);

  return (
      <MuiThemeProvider theme={themeConfig}>
       <React.Fragment>
           
       
       <Card >
      <CardContent>
     < FormControlLabel control={<Switch onClick={toggleDarkMode}/>} />
        <Typography  color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          belent
        </Typography>
        <Typography  color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
       </React.Fragment>
      </MuiThemeProvider>  
      );
}

export default HomePage2;

