import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import A from '../assets/A.svg'

import { Navbar, Nav, } from 'react-bootstrap';

export default class navbar extends Component {
    render() {
        return (
            <Navbar expand='lg' bg='dark' className="navbar-dark" >
                <Navbar.Brand className="ml-5">
                  <img src={A} width="30" height="30"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-collapse" />
                <Navbar.Collapse id="basic-navbar-collapse">
                <Nav className="w-100 justify-content-end mr-5">
                    <Nav.Link>
                     account
                    </Nav.Link>
                    <Nav.Link >
                     github
                    </Nav.Link>
                    <Nav.Link >
                     get in touch
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
