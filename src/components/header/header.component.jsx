import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


import { createMuiTheme, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import theme from '../ui/theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// import './header.style.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab:{
    ...theme.typography.tab
  },
  button:{
    marginRight:'20px'
  },
  logoContainer: {
    padding: 0
  },
  iconButton: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    },
    drawerItem: {
      ...theme.typography.tab,
      color: 'white',
      marginTop:'10px'
    },
    drawer: {
      backgroundColor: 'red'
    }
  }

}));

export default function Header(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false)
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };

 useEffect(() =>{
   if (window.location.pathname === '/about' && value !==0 ) {
    setValue(0)
  } else  if (window.location.pathname === '/resume' && value !==1) {
    setValue(1)
  } else  if (window.location.pathname === '/projects' && value !==2 ) {
    setValue(2)
  } else  if (window.location.pathname === '/contact' && value !==3 ) {
    setValue(3)
  }else  if (window.location.pathname === '/' && value !==4 ) {
    setValue(4)
  }
}, [value]);

const tabs= (
  <React.Fragment>
  <Tabs className={classes.tabContainer} 
                value={value} 
                onChange={handleChange}
          >
            <Tab className={classes.tab} label='About' component={Link} to='/about' />  
            <Tab className={classes.tab} label='Resume' component={Link} to='/resume' />
            <Tab className={classes.tab} label='Projects' component={Link} to='/projects' />
            <Tab className={classes.tab} label='Contact' component={Link} to='/contact' />
          </Tabs>
          <Button variant='contained' color="secondary" className={classes.button}>Git</Button>
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
      classes={{paper:classes.drawer}}
    > 
            <List disablePadding>
                <ListItem divider button onClick={()=>setOpenDrawer(false)} >
                    <ListItemText className={classes.drawerItem}>
                    Menu
                    </ListItemText>
                </ListItem>
                <ListItem divider button onClick={()=>setOpenDrawer(false)} component={Link} to='/about'  >
                    <ListItemText className={classes.drawerItem}>
                    About
                    </ListItemText>
                </ListItem>
                <ListItem divider button onClick={()=>setOpenDrawer(false)} component={Link} to='/resume'  >
                    <ListItemText className={classes.drawerItem}>
                    Resume
                    </ListItemText>
                </ListItem>
                <ListItem divider button onClick={()=>setOpenDrawer(false)} component={Link} to='/projects'  >
                    <ListItemText className={classes.drawerItem}>
                    Projects
                    </ListItemText>
                </ListItem>
                <ListItem divider button onClick={()=>setOpenDrawer(false)} component={Link} to='/contact'  >
                    <ListItemText className={classes.drawerItem}>
                    Contact
                    </ListItemText>
                </ListItem>
            </List>
        <Button variant='contained' color="secondary" className={classes.button}>Git</Button>
    </SwipeableDrawer>
      <IconButton onClick={()=>setOpenDrawer(!openDrawer)} className={classes.iconButton}>
          <MenuIcon />
      </IconButton>
  </React.Fragment>
)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button 
            disableRipple 
            className={classes.logoContainer} 
            component={Link} to='/' 
            onClick={()=>setValue(4)}>KOVTUN SERGII
          </Button>
        { matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
    </div>
  );
}


