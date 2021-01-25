import React, { Component } from 'react'

import react from'../assets/react.svg'
import reactnative from'../assets/reactnative.svg'
import cc from'../assets/cc++.svg'
import python from'../assets/python.svg'
import js from'../assets/js.svg'
import ml from'../assets/ml.svg'

export default class Skill extends Component {
  state={
    skills:["React Native","React","Python","Machine Learning","C/C++","Node"],
    icons:[reactnative,react,python,ml,cc,js]

  }

 //skillsArray=["React Native","React","Python","Machine Learning","C/C++","Node"];
  render() {
    return (
      <div className="skill_body">
      <div className=" container container-fluid">
         <span className="center skill_title">Snooping About Me</span>
      </div>
      <div className="d-flex justify-content-center">
      
            <div className="column">
               <div className="row-position">
                 <img src={this.state.icons[0]}/>
                 <span className="skill_text">{this.state.skills[0]}</span>
               </div>

               <div className="row-position">
                 <img src={this.state.icons[1]}/>
                 <span className="skill_text">{this.state.skills[1]}</span>
               </div>

               <div className="row-position">
                 <img src={this.state.icons[2]}/>
                 <span className="skill_text">{this.state.skills[2]}</span>
               </div>
            </div>
            <div className="column">

               <div className="row-position">
                 <img src={this.state.icons[3]}/>
                 <span className="skill_text">{this.state.skills[3]}</span>
               </div>

               <div className="row-position">
                 <img src={this.state.icons[4]}/>
                 <span className="skill_text">{this.state.skills[4]}</span>
               </div>

               <div className="row-position">
                 <img src={this.state.icons[5]}/>
                 <span className="skill_text">{this.state.skills[5]}</span>
               </div>
            </div>

       </div>
      </div>
    );
  }
}
