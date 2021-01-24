import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
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
          <ScrollAnimation animateIn="fadeIn">        
           <div className="position">
         <Skills/>
         </div>
         </ScrollAnimation>


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
