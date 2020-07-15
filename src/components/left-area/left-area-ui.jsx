import React from 'react';

import LinksComponent from '../links-component/links-compnent';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';

import photoMy from '../../img/MyPhoto.jpg'; 

const useStyles = makeStyles(theme=>({
    mainBox:{
        backgroundColor: theme.palette.common.red,
        padding:'20px',
        marginLeft: '20px',
        marginTop: '20px',
        [theme.breakpoints.down("md")]: {
            marginLeft: '0px',
            marginTop: '0px',
          },
          [theme.breakpoints.down("xs")]: {
            marginLeft: '0px',
            marginTop: '0px',
          }
    },
    box:{
       marginTop:'10px' 
    },
    photoContainer:{
        height: '30vmin',
        borderRadius: '50%',
        marginTop: '10px',
        marginLeft: '20px',
        marginBottom:'10px',
        cursor:'pointer',
        [theme.breakpoints.down("md")]: {
            height: '40vmin',
          },
          [theme.breakpoints.down("xs")]: {
            height: '50vmin',
          }
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
              },
              [theme.breakpoints.down("md")]: {
                fontSize:'0.8rem',
              },
              [theme.breakpoints.down("xs")]: {
                fontSize:'0.8rem',
              }
              
      }
}))

export default function LeftAreaUi() {
    const classes = useStyles();

    return(
            <React.Fragment>
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
                <Button variant="contained" color="secondary" className={classes.buttonLeftArea} href='https://github.com/SergiiKov/cv/blob/master/public/CV.pdf'>Learn more</Button>
                <Box className={classes.box}>
                    <LinksComponent />
                </Box>  
            </Box>
            </React.Fragment>
    )
}