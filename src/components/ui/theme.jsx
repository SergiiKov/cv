import { createMuiTheme } from '@material-ui/core/styles';

// const arcBlue = "#0B72B9";
const arcBlue = "#3f51b5";
const arcOrange = "#FFBA60";


const theme = createMuiTheme({

    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
          },
        primary: {
          main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`,
        },
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
          }
      }
});

export default theme;