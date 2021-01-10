import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './views/home';
import form from './components/form'
import card from './components/cardDisplay'
import footer from './components/socialFooter'
import './sass/components/cardDisplay.scss'
import './sass/main.scss'

function App() {
  return (
    <div>
    <Router>
      <switch>
        <Route path="/" component={footer}/>
      </switch>
    </Router>
      
    </div>
  );
}

export default App;
