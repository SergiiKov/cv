import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import LinksComponent from '../../components/links-component/links-compnent';
import axios from 'axios';

import {useState} from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    background:{
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'30em'
    },
    contactPage:{
      marginTop: '20px',
      marginLeft: '20px',
      marginRight: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    backgroundColor: '#ef9a9a'
    }

  }));
  
  export default function Contact() {
    const classes = useStyles();
    const theme= useTheme(); 

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');

    const [message,setMessage] = useState('');

    const onChange = event => {
        let valid;
    
        switch (event.target.id) {
          case "email":
            setEmail(event.target.value);
            valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
              event.target.value
            );
    
            if (!valid) {
              setEmailHelper("Invalid email");
            } else {
              setEmailHelper("");
            }
            break;
          case "phone":
            setPhone(event.target.value);
            valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
              event.target.value
            );
    
            if (!valid) {
              setPhoneHelper("Invalid phone");
            } else {
              setPhoneHelper("");
            }
            break;
          default:
            break;
        }
      };

  const onConfirm = () =>{
    axios.get('https://us-central1-material-ui-5daa2.cloudfunctions.net/sendMail')
    .then(res =>console.log(res))
    .catch(err =>console.log(err))
  };
  
    return (
        <Grid container direction='row' className={classes.contactPage}>
            <Grid item container direction="column"
  justify="center"
  alignItems="center" lg={12}>
                <Grid item>
                    <Typography variant='h2'>Contact US</Typography>
                    <Typography variant='body1'>Contact US</Typography> 
                </Grid>
                <Grid item container>
                    <Grid item>
                      phone
                    </Grid>
                    <Grid item>
                       <Typography variant='body1'><a href='tel:2323232 34234 23'>2323232 34234 23</a></Typography>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item>
                   mail
                    </Grid>
                    <Grid item>
                       <Typography variant='body1'><a href='mailto:mail12345'>@mail12345</a></Typography>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item>
                        <TextField 
                        label='Name' 
                        id='name' 
                        value={name} 
                        onChange={(event)=> setName(event.target.value)} />
                    </Grid>
                    <Grid item>
                    <TextField label='Email' id='email' error={emailHelper.length !==0} helperText={emailHelper} value={email} onChange={onChange} />
                    </Grid>
                    <Grid item>
                    <TextField label='Phone' id='phone' error={phoneHelper.length !==0} helperText={phoneHelper} value={phone} onChange={onChange} />
                    </Grid>
                </Grid>
                <Grid item>
                <TextField multiline rows={5} id='message' value={message} onChange={(event)=> setMessage(event.target.value)} />
               <Grid>
                   <Button 
                   variant="contained" color="secondary"
                   disabled={name.length===0 || message.length===0 || phoneHelper.length !==0 || emailHelper.length !==0 } onClick={onConfirm}>Send Message</Button>
               </Grid>
                </Grid>
            </Grid>
        
            
        </Grid>
    );
  }