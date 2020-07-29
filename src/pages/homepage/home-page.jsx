import React from 'react';


import '../homepage/home-page.styles.scss';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Title from '../../components/ui/title';
import Grid from '@material-ui/core/Grid';
import SubTitle from '../../components/ui/sub-title';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
// import contact from '../../img/contact.jpg'; 

const useStyles = makeStyles(theme=>({
    root: {
        height: '100vh',
      },
      image: {
        // backgroundImage: 'url(https://source.unsplash.com/random)',
        // backgroundImage: `url(${contact})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
}));


const HomePage = () => {
  const classes = useStyles();

  return (
<React.Fragment>
    {/* <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={3} md={4} className={classes.image} />
    </Grid> */}
    <div className={classes.image}>
    <div className={classes.root}>
</div>
    </div>
  
</React.Fragment>
      );
}


export default HomePage;

// class HomePage extends React.Component { 
//     constructor(){
//         super();
//     } 

//     render(){
//         return(
//             <div className='home-page'>
//             {photoMy}
//               <div className='tewr'>   
// Kovtun Sergii        
// Personal Website
//       </div>
    
//             </div>
//             );
//     }
   
//     };

// export default HomePage;
 

