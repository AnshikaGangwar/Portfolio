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
                 <span className="skill_title d-flex justify-content-center">My Journey</span>
                 </div>
               <div className=" front ">
                <div className=" circle1 ">
                   <span className="text ml-4">Shri Gulab Rai Montessori Sr. Sec. School , Bareilly</span>
                </div>
                <div className=" circle2 ">
                <span className="text ml-4">B.Tech Information Technology,
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
