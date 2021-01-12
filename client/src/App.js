import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 //import '@fortawesome/fontawesome-free/css/all.min.css';
 //import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import './sass/main.scss'
// components
import Homepage from './views/home';
import form from './components/form'
import card from './components/cardDisplay'
import Footer from './components/socialFooter'
import Navbar from './components/navbar'
function App() {
  return (
    <div >
    <Router>
    <Navbar />
      <switch>
        <Route path="/" component={card}/>
        <Route path="/form" component={form}/>
      </switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
