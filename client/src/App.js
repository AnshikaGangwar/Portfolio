import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './sass/main.scss'
// components
import Homepage from './views/home';
import Footer from './components/socialFooter'
import Navbar from './components/navbar'
import AdminPage from './components/admin'


function App() {

  
  return (
    <div >
    <Router>
    <Navbar />
      <switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/admin" exact component={AdminPage}/>
      </switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
