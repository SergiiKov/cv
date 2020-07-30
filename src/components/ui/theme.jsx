import { createMuiTheme } from '@material-ui/core/styles';

// const arcBlue = "#0B72B9";
const arcBlue = "#3f51b5";
const arcOrange = "#ff9800";
const leftRed = '#e53935';

const theme = createMuiTheme({

    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
            red: `${leftRed}`
          },
        primary: {
          main: `${arcBlue}`,
          type:'dark'
        },
        secondary: {
            main: `${arcOrange}`,
        }
      },
      typography: {
          tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: '700',
            fontSize:'1rem'
          },
          boxTitle: {
            fontFamily: 'Roboto',
            textTransform: 'none',
            fontWeight: '500',
            fontSize:'1.2rem'
          },
      },
      
      overrides:{
        MuiInputLabel:{
          root:{
            color: arcBlue,
            fontSize: '1rem'
          }
        },
        MuiInput:{
          underline:{
            '&:before':{
              borderBottom:`2px solid ${arcBlue}`
            },
            '&:hover:not($disabled):not(focused):not(error):before': {
              borderBottom:`2px solid ${arcBlue}`
            }
          }
        }
      }

});

export default theme;