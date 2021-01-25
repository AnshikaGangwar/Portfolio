import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import fb from '../assets/fb.svg'
import linkedIn from '../assets/linkedIn.svg'
import git from '../assets/github.svg'
import gmail from '../assets/gmail.svg'
import insta from '../assets/insta.svg'
import Card from './cardDisplay'

export default class socialFooter extends Component {
    email="anshikagangwar289@gmail.com";
    render() {
        return (
            <div className="footer_wrapper">
                <footer>
                   <div className="container">
                       <div className="row">
                           <div className="col">
                               <div className="container name_div logo">
                                   <span className="name">Anshika Gangwar</span>
                               </div>
                               <div className=" container logo">
                                  <a href={"mailto:"+this.email} >
                                      <img src={gmail} className="img footer_img"/>
                                  </a>  
                                  <a href="https://github.com/AnshikaGangwar">
                                      <img src={git} className="img footer_img"/>
                                  </a>  
                                  <a href="https://www.instagram.com/anshika_2927/">
                                      <img src={insta} className="img footer_img"/>
                                  </a> 
                                  <a href="https://www.linkedin.com/in/anshika-gangwar/">
                                      <img src={linkedIn} className="img footer_img"/>
                                  </a> 
                                  <a href="https://www.facebook.com/anshika.gangwar.357/">
                                      <img src={fb} className="img footer_img"/>
                                  </a>   
                               </div>
                           </div>
                       </div>
                   </div>
                </footer>
            </div>
        )
    }
}
