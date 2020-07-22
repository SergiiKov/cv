import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tooltip from '@material-ui/core/Tooltip';

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Switch from "@material-ui/core/Switch";
import {
  orange,
  indigo,
  lightBlue,
  deepPurple,
  deepOrange
} from "@material-ui/core/colors";

import Title from '../ui/title';


function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '0.5em',
    [theme.breakpoints.down("md")]: {
      marginBottom: "0.1em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.1em"
    }
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab:{
    ...theme.typography.tab,
    textTransform: 'uppercase',
    minWidth:10,
    marginLeft:'10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    '&:hover': {
      opacity: 0.9
    }
  },
  button:{
    marginRight:'20px',
    marginLeft: '50px',
  },
  logoContainer: {
    padding: 0,
    marginLeft:'10px',
    color:'white',
    fontFamily: 'Roboto',
            textTransform: 'uppercase',
            fontWeight: '400',
            letterSpacing: '0.09em',
            fontSize:'1.2rem',
            cursor:'pointer',
            '&:hover': {
                color:'#FFBA60'
              }
  },
  iconButton: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }},
    drawer: {
     backgroundColor: '#1a237e',
    },
    drawerItem: {
      ...theme.typography.tab,
      color: 'white',
      marginTop:'10px',
      opacity: 0.7
    },
    drawerItemSelected: {
      opacity:1
    },
    drawerButton:{
    marginTop:'20px',
    marginLeft: '10px',
    marginRight: '10px',
  },
    appBar: {
      zIndex: theme.zIndex.modal + 1
    }
    
}));

export default function Header(checked1, onChange1) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false)
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };

  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : indigo[500];
  const mainSecondaryColor = darkState ? indigo[500] : orange[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });

  const handleThemeChangeTheme = () => {
    setDarkState(!darkState);
  };

 useEffect(() =>{
  // if (window.location.pathname === '/' && value !==4 ) {
  //   setValue(4)
  // } else  
  if (window.location.pathname === '/' && value !==0) {
    setValue(0)
  } else  if (window.location.pathname === '/resume' && value !==1 ) {
    setValue(1)
  } else  if (window.location.pathname === '/projects ' && value !==2 ) {
    setValue(2)
  }else if (window.location.pathname === '/contact ' && value !==3 ) {
      setValue(3)
  }
}, [value]);

const tabs= (
  <React.Fragment>
  <Tabs className={classes.tabContainer} 
                value={value} 
                onChange={handleChange}
          >
            <Tab className={classes.tab} label='About' component={Link} to='/cv' />  
            <Tab className={classes.tab} label='Resume' component={Link} to='/resume' />
            <Tab className={classes.tab} label='Projects' component={Link} to='/projects' />
            <Tab className={classes.tab} label='Contact' component={Link} to='/contact' />
          </Tabs>
          <Tooltip title="Source code of the website">
            <Button variant='contained' color="secondary" className={classes.button} href='https://github.com/SergiiKov/cv'>Sourse</Button>
          </Tooltip>
  </React.Fragment>
)

const drawer = (
  <React.Fragment>
    <SwipeableDrawer 
       disableBackdropTransition={!iOS} 
       disableDiscovery={iOS} 
       open={openDrawer} 
       onClose={()=>setOpenDrawer(false)}
       onOpen={()=>setOpenDrawer(true)}
       classes={{paper: classes.drawer}}
    > 
    <div className={classes.toolbarMargin} />
   
    <List disablePadding>
                {/* <ListItem divider button component={Link} to='/' selected={value===4}  onClick={()=>{setOpenDrawer(false); setValue(4) }} >
                    <ListItemText className={value === 4 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}>
                    Kovtun Sergii
                    </ListItemText>  
                </ListItem> */}
                <ListItem divider button selected={value===0} onClick={()=>{setOpenDrawer(false); setValue(0) }} component={Link} to='/'  >
                    <ListItemText className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}>
                    About
                    </ListItemText>
                </ListItem>
                <ListItem divider button selected={value===1} onClick={()=>{setOpenDrawer(false); setValue(1) }} component={Link} to='/resume'  >
                    <ListItemText className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}>
                    Resume
                    </ListItemText>
                </ListItem>
                <ListItem divider button selected={value===2} onClick={()=>{setOpenDrawer(false); setValue(2) }} component={Link} to='/projects'  >
                    <ListItemText className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}>
                    Projects
                    </ListItemText>
                </ListItem>
                <ListItem divider button selected={value===3} onClick={()=>{setOpenDrawer(false); setValue(3) }} component={Link} to='/contact'  >
                    <ListItemText className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}>
                    Contact
                    </ListItemText>
                </ListItem>
            </List>

  
            
        <Button variant="contained" color="secondary" className={classes.drawerButton} href='https://github.com/SergiiKov/cv'>Sourse</Button>
    </SwipeableDrawer>
      <IconButton onClick={()=>setOpenDrawer(!openDrawer)} className={classes.iconButton}>
          <MenuIcon />
      </IconButton>
  </React.Fragment>
)

  return (
    <ThemeProvider theme={darkTheme}>
      <React.Fragment>
      <CssBaseline/>
      <ElevationScroll>
      <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Button 
            disableRipple 
            className={classes.logoContainer} 
            component={Link} to='/' 
            onClick={()=>setValue(0)}>KOVTUN SERGII
          </Button>
        { matches ? drawer : tabs}
        <Tooltip title="Toggle light/dark theme">
        <Switch checked={darkState} onChange={handleThemeChangeTheme} />
        </ Tooltip>
        <Title></Title>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </div>
      </ElevationScroll>
    </React.Fragment> 
       </ThemeProvider>
    
  );
}


