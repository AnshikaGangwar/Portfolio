import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from '@material-ui/core/Button'
import '../sass/components/form.scss'
export default class form extends Component {
    render() {
        return (
            <div className='container-fluid center body vh-100'>
                <Card className="bg  p-5">
                    <Card.Body>
                    <span className="title">Let's combine our ideas and colaborate</span>
                        <Form className="form_align">
                            <Form.Group controlId="form_name" className="form-inline mt-5">
                                <Form.Label className="label">your name</Form.Label>
                                <Form.Control type="text" placeholder="name" className="placeholder ml-4"/>  
                            </Form.Group>
                            <Form.Group controlId="form_email" className="form-inline">
                                <Form.Label className="label">your email</Form.Label>
                                <Form.Control type="email" placeholder="email" className="placeholder ml-4"/>
                            </Form.Group>
                            <Form.Group controlId="form_text" className="group">
                                <Form.Label className="label">wanna say something</Form.Label>
                                <textarea class="form-control" className="textarea"/>
                            </Form.Group>
                        </Form>
                        <Button variant="contained" style={{background:"#B93838", color:"#E1DDDD"}} className="mt-4">colaborate</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
