import React, { Component } from 'react'
import {MDBCol , MDBRow , MDBContainer , MDBFooter} from 'mdbreact'
import {ExternalLink} from 'react-external-link'
import fb from '../assets/fb.svg'
import linkedIn from '../assets/linkedIn.svg'
import git from '../assets/github.svg'
import gmail from '../assets/gmail.svg'
import insta from '../assets/insta.svg'
import '../sass/components/socialFooter.scss'
import Card from './cardDisplay'
import '../sass/main.scss'

export default class socialFooter extends Component {
    render() {
        return (
            <div className="body">
              <Card/>
                <MDBFooter>
                   <MDBContainer>
                       <MDBRow>
                           <MDBCol>
                               <div className="container name_div logo">
                                   <span className="name">Anshika Gangwar</span>
                               </div>
                               <div className=" container logo">
                                  <ExternalLink href="https://facebook.com/npns99">
                                      <img src={gmail} className="img"/>
                                  </ExternalLink>  
                                  <ExternalLink href="https://facebook.com/npns99">
                                      <img src={git} className="img"/>
                                  </ExternalLink>  
                                  <ExternalLink href="https://facebook.com/npns99">
                                      <img src={insta} className="img"/>
                                  </ExternalLink> 
                                  <ExternalLink href="https://facebook.com/npns99">
                                      <img src={linkedIn} className="img"/>
                                  </ExternalLink> 
                                  <ExternalLink href="https://facebook.com/npns99">
                                      <img src={fb} className="img"/>
                                  </ExternalLink>   
                               </div>
                           </MDBCol>
                       </MDBRow>
                   </MDBContainer>
                </MDBFooter>
            </div>
        )
    }
}
