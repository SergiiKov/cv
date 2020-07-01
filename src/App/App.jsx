import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from '../components/header/header.component';
import HomePage from '../pages/homepage/home-page';
import AboutPage from '../pages/about/about-page';
import ContactPage from '../pages/contact/contact-page'; 
import ProjectsPage from '../pages/projects/projects-page';
import ResumePage from '../pages/resume/resume-page';
import LeftArea from '../components/left-area/left-area.component';

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from '../components/ui/theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
          <div className='grid-container'>
              <div className='grid-item'>
                <LeftArea />
              </div>
            <div className='grid-item'>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/contact' component={ContactPage} />
              <Route path='/projects' component={ProjectsPage} />
              <Route path='/resume' component={ResumePage} />
            </Switch>
            </div>
          </div>
      </ThemeProvider>
     
    </div>
  );
}

export default App;
