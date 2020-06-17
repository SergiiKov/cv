import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from '../components/header/header.component';
import HomePage from '../pages/homepage/home-page';
import AboutPage from '../pages/about/about-page';
import ContactPage from '../pages/contact/contact-page'; 
import LeftArea from '../components/left-area/left-area.component';

function App() {
  return (
    <div>
      <Header />
      <div className='grid-container'>
        <div className='grid-item'>
        <LeftArea />
        </div>
        <div className='grid-item'>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={AboutPage} />
        <Route path='/signin' component={ContactPage} />
      </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
