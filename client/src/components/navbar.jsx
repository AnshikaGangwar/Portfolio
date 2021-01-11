import React, { Component } from 'react'
import {MDBNavbar, MDBNavItem , MDBLink , MDBNavbarBrand , MDBNavbarNav } from 'mdbreact'
import {BrowserRouter as Router} from 'react-router-dom'
import A from '../assets/A.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


export default class navbar extends Component {
    render() {
        return (
            <Router className="body">
            <MDBNavbar className="navbar navbar-expand-md navbar-dark bg-dark" >
            <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <MDBNavbarNav className="navbar-nav ml-auto">
                
                     <MDBNavItem >
                       Navbar
                    {/* <img src={A}/> */}
                    </MDBNavItem>
                     
                </MDBNavbarNav>
                </div>   
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <MDBNavbarNav className="navbar-nav mr-auto">
                    <MDBLink>
                     account
                    </MDBLink>
                
                    <MDBLink>
                     github
                    </MDBLink>
                 
                    <MDBLink>
                     get in touch
                    </MDBLink>
                </MDBNavbarNav>
                </div>
            </MDBNavbar>
            </Router> 
        )
    }
}
