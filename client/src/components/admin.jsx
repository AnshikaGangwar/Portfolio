import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from '@material-ui/core/Button'
import { base } from '../base';

export default class admin extends Component {

    state={
        name:"",
        skill:"",
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
            </div>
        )
    }
}
