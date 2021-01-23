import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import textrec from '../assets/textrec.jpeg'
import oneml from '../assets/oneml.jpeg'
import cardDisplay from './cardDisplay'
export default class CardContainer extends Component {
    state={
        index:0
    };
    render() {
        return (
            <div className="container-fluid card-wrapper vh-100">
               <div className="card-title">
               <span className="skill_title">Some of my works</span>
               </div>
               <Carousel>
                   
                   <Carousel.Item className="item" interval={500}>
                       <div className="container carousel_card_wrapper"> 
                          <div className="col-md-4 d-flex justify-content-center align-items-center">
                          <img src={oneml} className="item-image"/>
                          </div>
                          <div className="col-md-8">
                          <span className="heading">ONEML</span>
                         <p className="content text-center w-100">Website - edu-social
                                platformfor machine learning algorithms visualization
                                Users can visualize the machine learning algorithms like linear
                                regression and know how the various formulas work and their
                                affecting factors</p>                
                          </div>

                      </div>
                   </Carousel.Item>
                   <Carousel.Item className="item" interval={500}>
                       <div className="container carousel_card_wrapper"> 
                          <div className="col-md-4 d-flex justify-content-center align-items-center">
                          <img src={textrec} className="item-image"/>
                          </div>
                          <div className="col-md-8">
                          <span className="heading">TEXTVIAIMAGE</span>
                         <p className="content text-center w-80">Cross platform app to extract text from static images and facility to
                           share and save the text .</p>                
                          </div>

                      </div>
                   </Carousel.Item>
                   <Carousel.Item className="item" interval={500}>
                       <div className="container carousel_card_wrapper"> 
                          <div className="col-md-4 d-flex justify-content-center align-items-center">
                          <img src={oneml} className="item-image"/>
                          </div>
                          <div className="col-md-8">
                          <span className="heading">ONEML</span>
                         <p className="content text-center w-80">Website - edu-social
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
