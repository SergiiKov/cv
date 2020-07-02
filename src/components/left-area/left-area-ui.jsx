import React from 'react';

import LinksComponent from '../links-component/links-compnent';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';


import photoMy from '../../img/MyPhoto.jpg'; 
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    mainBox:{
        backgroundColor: 'indianred',
        padding:'10px',
        // margin: '10px',
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
    },
    buttonLeftArea:{
        marginLeft: '20px',
        marginTop: '20px',
        marginBottom: '20px', 
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
                <Box className={classes.box}>
                    Kovtun Sergii
                </Box>
                <Box className={classes.box}>
                    Email: sergiikovtun.vn@gmail.com
                </Box>
                <Box className={classes.box}>
                    About
                </Box>
                <Box className={classes.box}>
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