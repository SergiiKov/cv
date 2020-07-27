import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from '../components/header/header.component';
import HomePage from '../pages/homepage/home-page';
import AboutPage from '../pages/about/about-page';
import ContactPage from '../pages/contact/contact-page'; 
import ProjectsPage from '../pages/projects/projects-page';
import ResumePage from '../pages/resume/resume-page';
import LeftAreaUi from '../components/left-area/left-area-ui';
import Grid from '@material-ui/core/Grid';

import Project2 from '../pages/projects/projects2';
import ResumeUi from '../pages/resume/resume-ui';

 import { ThemeProvider } from '@material-ui/core/styles';
 import theme from '../components/ui/theme';

function App() {
  return (
     <div>
              <Header />
            <ThemeProvider theme={theme}>
              <Grid container>
                  <Grid item xs={12} sm={4} >
                    <LeftAreaUi />
                  </Grid>
                  <Grid item xs={12} sm={8} >
                    <Switch>
                      <Route exact  path='/' component={HomePage} />
                      <Route exact path='/cv' component={AboutPage} />
                      <Route path='/resume' component={ResumeUi} />
                      <Route path='/projects' component={Project2} />
                      <Route path='/contact' component={ContactPage} />
                    </Switch>
                  </Grid>
              </Grid>
              </ThemeProvider>

     </div>
         
      
  );
}

export default App;
