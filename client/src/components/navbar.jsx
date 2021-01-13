import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import A from '../assets/A.svg'
import '../sass/components/navbar.scss'

import { Navbar, Nav, } from 'react-bootstrap';

export default class navbar extends Component {
    render() {
        return (
            <div className="navbar_container">
                <Navbar expand='lg'  className="navbar navbar_container" >
                <Navbar.Brand className="ml-5">
                  <img src={A} width="30" height="30"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-collapse" />
                <Navbar.Collapse id="basic-navbar-collapse">
                <Nav className="w-100 justify-content-end mr-5">
                    <Nav.Link className="navlink_text">
                     account
                    </Nav.Link>
                    <Nav.Link className="navlink_text">
                     github
                    </Nav.Link>
                    <Nav.Link className="navlink_text">
                     get in touch
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}
