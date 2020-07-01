import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from '../ui/theme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
  }

}));

export default function Header(props) {
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



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Button   component={Link} to='/' onClick={()=>setValue(4)}>KOVTUN SERGII</Button>
          
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
        </Toolbar>
      </AppBar>
    </div>
  );
}


