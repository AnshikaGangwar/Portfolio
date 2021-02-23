import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from '@material-ui/core/Button'
import { base } from '../base';

export default class admin extends Component {

    state={
        name:"",
        skill:"",
        journey:"",
        title:"",
        description:"",
    }
  
    onNameChanged= async(event ) => {
       event.preventDefault();
       const newname={
           name:this.state.name
       }
       const data=await axios.post(base +'nameupload', newname)
       .then((res) => {
           console.log(res);
       })
    }
    addSkill= async(event)=>{
      event.preventDefault();
      const skill= {
        skill:this.state.skill
      }
      const data = await axios.post(base + 'api/personalskill/skillupload',skill)
          .then((res)=>{
            console.log(res);
          })
    }

    addJourney = async (event) =>{
      event.preventDefault();
      const journey = {
        journey : this.state.journey
      }
      const data = await axios.post(base + 'api/personaljourney/journeyupload', journey)
               .then((res)=>{
                 console.log(res);
              })     
    }

    addWork = async (event) => {
      event.preventDefault();
      const work ={
        title : this.state.title,
        description : this.state.description,
      }
    }

    render() {
        return (
            <div>
                <div className="container name-form-container">
              <span className="form-title">Change name</span>
              <Form className="mt-3">
                <Form.Group controlId="name_form" className="form-inline">
                  <Form.Control type="text" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} placeholder="new name"/>
                </Form.Group>
              </Form>
              <Button variant="contained" style={{background:"#B93838", color:"#E1DDDD"}} onClick={this.onNameChanged}>Update Name</Button>  
            </div>
            <div className="container name-form-container mt-5">
              <span className="form-title">Change skills</span>
              <Form className="mt-3">
                <Form.Group controlId="skills_form" className="form-inline">
                  <Form.Control type="text" placeholder="skill" onChange={(e)=>{this.setState({skill: e.target.value})}} />
                </Form.Group>
              </Form>
              <Button variant="contained" style={{background:"#B93838", color:"#E1DDDD", marginRight:"20px"}} onClick={this.addSkill}>Add Skill</Button>
              <Button variant="contained" style={{background:"#B93838", color:"#E1DDDD"}}>Remove Skill</Button>
              
            </div>

            <div className="container name-form-container mt-5">
              <span className="form-title">Change journey</span>
              <Form className="mt-3">
                <Form.Group controlId="journey_form" className="form-inline">
                  <Form.Control type="text" placeholder="skill" onChange={(e)=>{this.setState({journey: e.target.value})}} />
                </Form.Group>
              </Form>
              <Button variant="contained" style={{background:"#B93838", color:"#E1DDDD", marginRight:"20px"}} onClick={this.addJourney}>Add Journey</Button>
              <Button variant="contained" style={{background:"#B93838", color:"#E1DDDD"}}>Remove Journey</Button>
              
            </div>
            
            <div className="container name-form-container mt-5">
              <span className="form-title">Change my works</span>
              <Form className="mt-3">
                <Form.Group controlId="mywork_form1" className="form-inline">
                  <Form.Control type="text" placeholder="title" onChange={(e)=>{this.setState({title: e.target.value})}} />
                </Form.Group>
                <Form.Group controlId="mywork_form2" className="form-inline">
                  <Form.Control type="text" placeholder="description" onChange={(e)=>{this.setState({description: e.target.value})}} />
                </Form.Group>
              </Form>
              <Button variant="contained" style={{background:"#B93838", color:"#E1DDDD", marginRight:"20px"}} onClick={this.addWork}>Add My Work</Button>
              <Button variant="contained" style={{background:"#B93838", color:"#E1DDDD"}}>Remove Work</Button>
              
            </div>
            </div>
        )
    }
}
