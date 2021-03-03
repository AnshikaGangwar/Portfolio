import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import Intro from '../components/intro'
import Skills from '../components/skills'
import Journey from '../components/journey'
import MyWork from '../components/cardContainer'
import Form from '../components/form'
import axios from 'axios'

export default class Homepage extends Component {
  state={
    skill:[],
    journey:[],
    work:[],
  }

  contactform=React.createRef();
  executeContactFormScroll=()=> this.contactform.current.scrollIntoView();

   componentDidMount= async() => {
       const skillData = await axios.get('http://localhost:6972/api/personalskill/skillupload')
       console.log(skillData);

       const journeyData = await axios.get('http://localhost:6972/api/personaljourney/journeyupload');
       console.log(journeyData);

       const myworkData = await axios.get('http://localhost:6972/api/personalwork/workupload');
       console.log(myworkData);

       this.setState({skill:skillData,journey:journeyData , work: myworkData});


    ScrollReveal().reveal('.journey_wrapper_home',{origin:'bottom', distance: '130px', viewFactor: 0.4, reset:true });
    ScrollReveal().reveal('.skills_wrapper_home',{origin:'bottom', distance: '130px', viewFactor: 0.4, reset:true });
    ScrollReveal().reveal('.form_wrapper_home',{origin:'bottom', distance: '130px', viewFactor: 0.4, reset:true });
  }
  
  render() {
    return (
      <div className="container-fluid home_container_main">
         <div className="position"> 
         <Intro slide={this.contactform}/>
         </div>
    
          <div className="position skills_wrapper_home">
         <Skills/>
         </div>

         <div className="position journey_wrapper_home">
         <Journey/>
      
         </div>

         <div className="position">
         <MyWork/>
         </div>

         <div id="get_in_touch" ref={this.contactform} className="position form_wrapper_home">
          <Form/>          
         </div>
      </div>
    );
  }
}
