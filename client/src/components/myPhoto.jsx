import React, { Component } from 'react'
import Typist from 'react-typist'
import Me from '../assets/me.svg'

export default class MyPhoto extends Component {
    
    delay=120;
    stdelay1=1400;
    stdelay2=2500;
    hideWhenDoneDelay=true;
    render() {
        return (
            <div className="container-fluid me_body vh-100 w-100">
            <div className="row container">
            <div className="col-md-8" style={{zIndex:'2'}}>
            {/* <Typist cursor={{show:false}} avgTypingDelay={this.delay} >
                        <span className="me_text">PASSIONATE.</span> 
            </Typist>
            <Typist cursor={{show:false}} onLineTyped={this.onlineTyped2} avgTypingDelay={this.delay} startDelay={this.stdelay1} >
                        <span className="me_text">CREATIVE.</span> 
            </Typist>
            <Typist  cursor={{show:false}} onLineTyped={this.onlineTyped3} avgTypingDelay={this.delay} startDelay={this.stdelay2}>
                        <span className="me_text">VERSATILE.</span> 
            </Typist> */}
            <div className="me_wrapper">
            <span className="me_name">Anshika Gangwar</span>
            </div>
            </div>
            <div className="col-md-4">
              <img className="me_photo" src={Me}/>
            </div>
            </div>            
            </div>
        )
    }
}
