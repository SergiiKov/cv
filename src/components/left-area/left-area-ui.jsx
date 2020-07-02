import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import photoMy from '../../img/MyPhoto.jpg'; 

const useStyles = makeStyles(theme=>({
 
}))

export default function LeftAreaUi() {
    const classes = useStyles();

    return(
        <div className={classes.footer}>

            <Grid container >
                <Grid item >
                <img src={photoMy} alt="Sergii Kovtun"  className='photo-container'/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item >
                Kovtun Sergii
                </Grid>
            </Grid>
            <Grid container>
                <Grid item >
                Kovtun Sergii
                </Grid>
            </Grid>
           
          
        </div>
    )

}