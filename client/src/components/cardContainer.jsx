import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import textrec from '../assets/textrec.jpeg'
import oneml from '../assets/oneml.jpeg'
import { base } from '../base';

export default class CardContainer extends Component {
    state={
        index:0
    };
    render() {
        return (
            <div className="container-fluid card-wrapper1 vh-100">
               <div className="card-title1">
               <span className="skill_title">Some of my works</span>
               </div>
               <Carousel interval={5000} keyboard={false} pauseOnHover={true}>
                   
                   <Carousel.Item >
                       <div className="container carousel_card_wrapper1"> 
                          <div className="col-md-4 d-flex justify-content-center align-items-center">
                          <img src={oneml} className="item-image1"/>
                          </div>
                          <div className="col-md-8">
                          <span className="heading1">ONEML</span>
                         <p className="content1 text-center w-100">Website - edu-social
                                platformfor machine learning algorithms visualization
                                Users can visualize the machine learning algorithms like linear
                                regression and know how the various formulas work and their
                                affecting factors</p>                
                          </div>

                      </div>
                   </Carousel.Item>
                   <Carousel.Item >
                       <div className="container carousel_card_wrapper1"> 
                          <div className="col-md-4 d-flex justify-content-center align-items-center">
                          <img src={textrec} className="item-image1"/>
                          </div>
                          <div className="col-md-8">
                          <span className="heading1">TEXTVIAIMAGE</span>
                         <p className="content1 text-center w-80">Cross platform app to extract text from static images and facility to
                           share and save the text .</p>                
                          </div>

                      </div>
                   </Carousel.Item>
                   <Carousel.Item >
                       <div className="container carousel_card_wrapper1"> 
                          <div className="col-md-4 d-flex justify-content-center align-items-center">
                          <img src={oneml} className="item-image1"/>
                          </div>
                          <div className="col-md-8">
                          <span className="heading1">ONEML</span>
                         <p className="content1 text-center w-80">Website - edu-social
                                platform for machine learning algorithms visualization
                                Users can visualize the machine learning algorithms like linear
                                regression and know how the various formulas work and their
                                affecting factors</p>                
                          </div>
                      </div>
                   </Carousel.Item>
               </Carousel>                
            </div>
        )
    }
}
