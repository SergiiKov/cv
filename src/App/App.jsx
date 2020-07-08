import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import './App.scss';

import Header from '../components/header/header.component';

import contact2 from '../pages/contact/contact2';
import Footer from '../components/footer/footer';
import HomePage from '../pages/homepage/home-page';
import AboutPage from '../pages/about/about-page';
import ContactPage from '../pages/contact/contact-page'; 
import ProjectsPage from '../pages/projects/projects-page';
import ResumePage from '../pages/resume/resume-page';
import LeftAreaUi from '../components/left-area/left-area-ui';
import Grid from '@material-ui/core/Grid';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../components/ui/theme';

function App() {
  return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Header />
            <Grid container >
                <Grid item xs={12} sm={4} >
                  <LeftAreaUi />
                </Grid>
                <Grid item xs={12} sm={8} >
                  <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route path='/about' component={AboutPage} />
                  {/* <Route path='/contact' component={ContactPage} /> */}
                   <Route path='/contact' component={contact2} />
                  <Route path='/projects' component={ProjectsPage} />
                  <Route path='/resume' component={ResumePage} />
                </Switch>
                </Grid>
            </Grid>
            <Footer />
        </ThemeProvider> 
      </React.Fragment>
      
  );
}

export default App;
