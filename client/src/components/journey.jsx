import React, { Component } from 'react'
import C1 from '../assets/Ellipse 17.svg'
import C2 from '../assets/Ellipse 18.svg'
import C3 from '../assets/Ellipse 20.svg'
import C4 from '../assets/Ellipse 22.svg'


export default class Journey extends Component {
    render() {
        return (
            <div className="container-fluid j-wrapper vh-100">
                <div>
                 <span className="skill_title d-flex justify-content-center">
                     
                 <svg viewBox="0 0 960 300">
                    <symbol id="s-text">
                        <text text-anchor="middle" x="50%" y="80%">My Journey</text>
                    </symbol>

                    <g class = "g-ants">
                        <use href="#s-text" class="text-copy" />
                        <use href="#s-text" class="text-copy" />
                        <use href="#s-text" class="text-copy" />
                        <use href="#s-text" class="text-copy" />
                        <use href="#s-text" class="text-copy" />
                    </g>
                </svg>
                 </span>
                 </div>
               <div className=" front ">
                <div className=" circle1 ">
                   <span className="text ml-2 text-center">Shri Gulab Rai Montessori Sr. Sec. School , Bareilly</span>
                </div>
                <div className=" circle2 ">
                <span className="text ml-2 text-center">B.Tech Information Technology,
                  Motilal Nehru National Institute of Technology Allahabad</span>
                </div>
                </div>
                <div className=" end">
                <div className="circle3">
                 <span className="text">Salesforce Intern’21</span>
                </div>
                 <div className=" circle4 ">
                  <span className="text">DESIS Fellowship</span>
                 </div> 
                </div>  
                
            </div>
        )
    }
}
