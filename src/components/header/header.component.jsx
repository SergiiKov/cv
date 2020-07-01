import React from 'react';
import { Link } from 'react-router-dom';


import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
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
    fontSize:'1rem'
  }

}));

export default function Header(props) {
  const classes = useStyles();
  const { children, value, index, ...other } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
         
          <Link to='/'>
            <Typography variant="h6" className={classes.title}>
                KOVTUN SERGII
            </Typography>
          </Link>

          <Tabs className={classes.tabContainer}>
            <Tab className={classes.tab} label='About' />  
            <Tab className={classes.tab} label='Resume' />
            <Tab className={classes.tab} label='Projects' />
            <Tab className={classes.tab} label='Contact' />
          </Tabs>
        
          <Button color="inherit">Git</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// const Header = () => {
//   return (
//     <div className='header'>
//     <Link className='logo-container' to='/'>
//       KOVTUN SERGII
//     </Link>
//     <div className='options'>
//       <Link className='option' to='/about'>
//         About
//       </Link>
//       <Link className='option' to='/resume'>
//         Resume
//       </Link>
//       <Link className='option' to='/projects'>
//         Projects
//       </Link>
//       <Link className='option' to='/contact'>
//         Contact
//       </Link>
//     </div>
//   </div>
//   );
// };

// export default Header;

