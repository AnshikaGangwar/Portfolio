import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { base } from '../base';


export default class form extends Component {
    state={
        name: "name",
        email: "email",
        msg: ""
    }

    onFormSubmit = async(event) =>{
        event.preventDefault();
      const formdetails= {
           name : this.state.name,
           email : this.state.email,
           message: this.state.msg,
       }
       const res = await axios.post(base + 'api/form/formupload', formdetails)
        .then((res)=>{
            console.log(res);
        })
    }

    render() {
        return (
            <div className='container-fluid center body vh-100'>
                <Card className="bg  p-5">
                    <Card.Body>
                    <span className="title">Let's combine our ideas and colaborate</span>
                        <Form className="form_align">
                            <Form.Group controlId="form_name" className="form-inline mt-5">
                                <Form.Label className="label">your name</Form.Label>
                                <Form.Control type="text" placeholder="name" className=" placeholder" onChange={(event)=>{this.setState({name:event.target.value})}} />  
                            </Form.Group>
                            <Form.Group controlId="form_email" className="form-inline">
                                <Form.Label className="label">your email</Form.Label>
                                <Form.Control type="email" placeholder="email" className="placeholder" onChange={(event)=>{this.setState({email:event.target.value})}}/>
                            </Form.Group>
                            <Form.Group controlId="form_text" className="group">
                                <Form.Label className="label">wanna say something</Form.Label>
                                <textarea class="form-control" className="textarea" onChange={(event)=>{this.setState({msg:event.target.value})}}/>
                            </Form.Group>
                        </Form>
                        <Button variant="contained" style={{background:"#B93838", color:"#E1DDDD"}} className="mt-4" onClick={this.onFormSubmit}  >colaborate</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
