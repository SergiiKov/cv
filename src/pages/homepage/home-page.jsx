// import '../homepage/home-page.styles.scss';

import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import photoMy from '../../img/MyPhoto.jpg'; 

const useStyles = makeStyles( (theme) => ({
  root: {
    marginLeft:'25%',
    marginTop:'10px',
    marginBottom: '20px',
    // width: '50%',
    width: '30em',
    [theme.breakpoints.down("md")]: {
        marginLeft:0,
        marginTop:0,
        marginBottom: '10px',
        width: '100%'
      },
      [theme.breakpoints.down("xs")]: {
        marginLeft:0,
        marginTop:0,
        marginBottom: '10px',
        width: '100%'
      }
  },
  media: {
     height: 440,
    [theme.breakpoints.down("md")]: {
      height: '50em',
    },
    [theme.breakpoints.down("xs")]: {
      height: '50em',
    }
  },
}));

export default function HomePage() {
  const classes = useStyles(); 
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={photoMy}
          title="Kovtun Sergii"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Kovtun Sergii
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Personal web page in the process of developing
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

 

