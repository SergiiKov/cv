import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';

import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  icons:{
    paddingTop: '5px'    
  }
}));

export default function SvgIconsColor() {
  const classes = useStyles();

  return (
    <ButtonGroup color="secondary" aria-label="outlined primary button group">
    <Tooltip title="GitHub">
        <Button><Link href='https://github.com/SergiiKov' color="secondary" className={classes.icons}><GitHubIcon /></Link></Button>
        </Tooltip>
        <Tooltip title="LinkedIn">
            <Button><Link href='https://www.linkedin.com/in/sergii-kovtun-1b97881a2/' color="secondary" className={classes.icons}><LinkedInIcon /></Link></Button>
            </Tooltip>
        <Tooltip title="Facebook">
            <Button><Link href='https://www.facebook.com/profile.php?id=100017264941501' color="secondary"className={classes.icons}><FacebookIcon/></Link></Button>
            </Tooltip>
        <Tooltip title="Email">
            <Button><Link href="mailto:sergiikovtun.vn@gmail.com" color="secondary" className={classes.icons}><MailIcon/></Link></Button>
            </Tooltip>
    </ButtonGroup>
  );
}