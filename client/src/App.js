import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 //import '@fortawesome/fontawesome-free/css/all.min.css';
 //import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import './sass/main.scss'
// components
import Homepage from './views/home';
import Form from './components/form'
import Card from './components/cardDisplay'
import Footer from './components/socialFooter'
import Navbar from './components/navbar'
import Skills from './components/skills'
function App() {
  return (
    <div >
    <Router>
    <Navbar />
      <switch>
        <Route path="/" exact component={Form}/>
        <Route path="/form" exact component={Form}/>
        <Route path="/skills" exact component={Skills}/>
      </switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
