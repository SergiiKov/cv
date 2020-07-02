import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
      backgroundColor: theme.palette.common.blue,
      zIndex: theme.zIndex.modal + 1,
      position:'relative'
  }  
  }));

  export default function Footer() {
      const classes = useStyles();

      return(
          <footer className={classes.footer}>
              Footer
          </footer>
      )
  }