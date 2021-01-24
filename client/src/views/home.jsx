import React, { Component } from 'react';
<<<<<<< HEAD
import ScrollAnimation from 'react-animate-on-scroll';
=======
import ScrollReveal from 'scrollreveal';
>>>>>>> 835f63b0ac8b45003060eba30b6ffda74dd0c737
import Intro from '../components/intro'
import Skills from '../components/skills'
import Journey from '../components/journey'
import MyWork from '../components/cardContainer'
import Form from '../components/form'

export default class Homepage extends Component {

  contactform=React.createRef();
  executeContactFormScroll=()=> this.contactform.current.scrollIntoView();

  componentDidMount() {
    ScrollReveal().reveal('.journey_wrapper_home',{origin:'bottom', distance: '130px', viewFactor: 0.3, reset:true });
    ScrollReveal().reveal('.skills_wrapper_home',{origin:'bottom', distance: '130px', viewFactor: 0.3, reset:true });
    ScrollReveal().reveal('.form_wrapper_home',{origin:'bottom', distance: '130px', viewFactor: 0.3, reset:true });
  }
  
  render() {
    return (
      <div className="container-fluid home-container">
         <div className="position"> 
         <Intro/>
         </div>
<<<<<<< HEAD
          <ScrollAnimation animateIn="fadeIn">        
           <div className="position">
=======

         <div className="position skills_wrapper_home">
>>>>>>> 835f63b0ac8b45003060eba30b6ffda74dd0c737
         <Skills/>
         </div>
         </ScrollAnimation>


         <div className="position journey_wrapper_home">
         <Journey/>
         </div>

         <div className="position">
         <MyWork/>
         </div>

         <div className="position form_wrapper_home">
          <Form/>          
         </div>
      </div>
    );
  }
}
