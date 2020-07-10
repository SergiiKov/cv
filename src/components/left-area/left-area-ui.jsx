import React from 'react';

import LinksComponent from '../links-component/links-compnent';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';

import photoMy from '../../img/MyPhoto.jpg'; 

const useStyles = makeStyles(theme=>({
    mainBox:{
        backgroundColor: '#ef5350',
        padding:'20px',
        marginLeft: '20px',
        marginTop: '20px',
        [theme.breakpoints.down('xs')]:{
            margin: 0
          },  
    },
    box:{
       marginTop:'10px' 
    },
    photoContainer:{
        height: '25vmin',
        borderRadius: '50%',
        marginTop: '20px',
        marginLeft: '20px',
        marginBottom:'10px',
        cursor:'pointer'
    },
    buttonLeftArea:{
        marginLeft: '0px',
        marginTop: '20px',
        marginBottom: '20px', 
    },
    boxBody: {
        ...theme.typography.body1
      },
      boxTitle:{
          ...theme.typography.boxTitle,
          paddingTop: '10px'
      },
      boxEmail:{
        paddingTop: '10px',
        fontFamily: 'Roboto',
            textTransform: 'uppercase',
            fontWeight: '400',
            letterSpacing: '0.09em',
            fontSize:'1rem',
            cursor:'pointer',
            '&:hover': {
                color:'#FFBA60'
              }
      }
}))

export default function LeftAreaUi() {
    const classes = useStyles();

    return(
        <div className={classes.footer}>
            <Box className={classes.mainBox} >
                <Box>
                <   img src={photoMy} alt="Sergii Kovtun"  className={classes.photoContainer}/>
                </Box>
                <Box className={[classes.box, classes.boxTitle]}>
                    Kovtun Sergii
                </Box>
                <Box className={[classes.box, classes.boxEmail]}>
                    Email: sergiikovtun.vn@gmail.com
                </Box>
                <Box className={[classes.box, classes.boxTitle]}>
                    About
                </Box>
                <Box className={[classes.box, classes.boxBody]}>
                    Hi, I'm Kovtun Sergii a software engineer with over four years IT industry experience,
                    that wants to evolve in the field of web development.
                    I want to try something new and ready to work hard to learn it. 
                </Box>
                <Button variant="contained" color="secondary" className={classes.buttonLeftArea}>Learn more</Button>
                <Box className={classes.box}>
                    <LinksComponent />
                </Box>  
            </Box>
        </div>
    )
}