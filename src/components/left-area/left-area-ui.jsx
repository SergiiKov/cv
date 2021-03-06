import React from 'react';

import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tooltip from '@material-ui/core/Tooltip';
import TextH5 from '../ui/TextH5';
import TextH6 from '../ui/TextH6';
import TextBody2 from '../ui/TextBody2';
import SvgIconsColor from '../links-component/links-icons-ui';

import cvUa from '../../img/cv_ua.pdf'
import cvEn from '../../img/cv_en.pdf'
import photoMy from '../../img/MyPhoto.jpg'; 

const useStyles = makeStyles(theme=>({
    mainBox:{
        backgroundColor: '#e53935',
        minHeight: '90vh',
        padding:'20px',
        [theme.breakpoints.down("md")]: {
            marginLeft:0,
            marginTop: 0
          },
          [theme.breakpoints.down("xs")]: {
            marginLeft:0,
            marginTop:0
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
          },
          transition: '1s ease-in-out',
            '&:hover': {
              transform: 'translate(4em,0)' 
            }
    },
    buttonLeftArea:{
        marginLeft: '0px',
        marginTop: '20px',
        marginBottom: '20px', 
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
                <TextH5>
                    Kovtun Sergii
                </TextH5>
                  <TextH6 >
                    <Link href="mailto:sergiikovtun.vn@gmail.com" color='inherit'  >
                     sergiikovtun.vn@gmail.com
                    </Link>
                  </TextH6>
                <TextH6>
                    About
                </TextH6>
                <TextBody2>
                    Hi, I'm Kovtun Sergii a software engineer with over four years IT industry experience,
                    that wants to evolve in the field of web development.
                    I want to try something new and ready to work hard to learn it. 
                </TextBody2>    
                  <ButtonGroup variant="contained" color="secondary" className={classes.buttonLeftArea} aria-label="contained secondary button group">
                  <Tooltip title="Download pdf file of my resume in english" placement="top">
                    <Button href={cvEn} target="_blank">resume</Button>
                   </Tooltip>
                   <Tooltip title="Загрузіть pdf файл мого резюме на українській" placement="top">
                    <Button href={cvUa} target="_blank" >резюме</Button>
                    </Tooltip>
                  </ButtonGroup>
                <Box className={classes.box}>
                    <SvgIconsColor />
                </Box>  
            </Box>
            </React.Fragment>
    )
}