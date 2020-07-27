import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from '../components/header/header.component';
import HomePage from '../pages/homepage/home-page';
import AboutPage from '../pages/about/about-page';
import ContactPage from '../pages/contact/contact-page'; 
import LeftAreaUi from '../components/left-area/left-area-ui';
import Grid from '@material-ui/core/Grid';

import ProjectPageUI from '../pages/projects/projects-page-ui';
import ResumePageUi from '../pages/resume/resume-page-ui';

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
                      <Route path='/resume' component={ResumePageUi} />
                      <Route path='/projects' component={ProjectPageUI} />
                      <Route path='/contact' component={ContactPage} />
                    </Switch>
                  </Grid>
              </Grid>
              </ThemeProvider>

     </div>
         
      
  );
}

export default App;
