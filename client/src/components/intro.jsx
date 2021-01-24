import React, { Component } from 'react'
import Typist from 'react-typist'
import Me from '../assets/me.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class MyPhoto extends Component {
    
    delay=120;
    stdelay1=1400;
    stdelay2=2500;
    hideWhenDoneDelay=true;
    render() {
        return (
            <div style={{background:"#282828"}}> 
              <div className="row container-fluid vh-100 w-100">
                 <div className="col-md-5 intro_wrapper">
                 <Typist cursor={{show:false}} avgTypingDelay={this.delay} > 
                       <span className="me_text"> Hey I am Anshika Gangwar  !!!  
                       Wanna know me ??</span> 
                 </Typist> 
                 </div> 
                   <div className="col-md-7">
                     <img src={Me} className="photo"/>
                   </div>           
              </div>
              <div className="arrow">
                <i className="fa fa-angle-double-down" />
              </div>
            </div>
        )
    }
}
