import React, { Component } from 'react';
import Intro from '../components/intro'
import Skills from '../components/skills'
import Journey from '../components/journey'
import MyWork from '../components/cardContainer'
import Form from '../components/form'

export default class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid home-container">
         <div className="position"> 
         <Intro/>
         </div>

         <div className="position">
         <Skills/>
         </div>

         <div className="position">
         <Journey/>
         </div>

         <div className="position">
         <MyWork/>
         </div>

         <div className="position">
         <Form/>          
         </div>
      </div>
    );
  }
}
