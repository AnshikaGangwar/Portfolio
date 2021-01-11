import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './views/home';
import form from './components/form'
import card from './components/cardDisplay'
import footer from './components/socialFooter'
import navbar from './components/navbar'
import './sass/components/cardDisplay.scss'
import './sass/main.scss'

function App() {
  return (
    <div className="body vh-100">
    <Router>
      <switch>
        <Route path="/" component={footer}/>
      </switch>
    </Router>
    </div>
  );
}

export default App;
