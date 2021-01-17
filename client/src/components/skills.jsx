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
      <div className="skill_wrapper ">
          <div className="row justify-content-center row-position">
              <div className="icon-text">
              <img className="rotate" src={this.state.icons[0]} width="20%"/>
              <span className="skill_text">{this.state.skills[0]}</span>
              </div>
          </div>
          <div className="row justify-content-center row-position">
               <div className="col-md-6 text-center icon-text">
               <img className="rotate" src={this.state.icons[1]} width="10%"/>
               <span className="skill_text">{this.state.skills[1]}</span>
               </div>
               <div className="col-md-6 text-center icon-text">
               <img className="rotate" src={this.state.icons[2]} width="10%"/>
               <span className="skill_text">{this.state.skills[2]}</span>
               </div>
          </div>
          <div className="row justify-content-center row-position">
             <div className="icon-text">
              <img className="rotate1"src={this.state.icons[3]}/>
              <span className="skill_text">{this.state.skills[3]}</span>
              </div>
          </div>
          <div className="row justify-content-center row-position">
               <div className="col-md-6 text-center icon-text">
               <img className="icon rotate1" src={this.state.icons[4]} width="10%"/>
               <span className="skill_text">{this.state.skills[4]}</span>
               </div>
               <div className="col-md-6 text-center icon-text">

               <span className="skill_text">{this.state.skills[5]}</span>
               <img className="rotate1" src={this.state.icons[5]} width="10%"/>
               </div>
          </div>
      </div>
    
      </div>
      </div>
    );
  }
}
