import React, { Component } from 'react';
import './navbar.scss';

import { Link } from 'react-router-dom';

import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap'

class ReactNavbar extends Component {
    state = {  }
    render() { 
        return ( 
          <Navbar className='navbar-custom' collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">INVTN</Navbar.Brand>
          <Navbar.Toggle className='custom-burger' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Products" id="collasible-nav-dropdown">
                <Link to='/shirts'>
                <NavDropdown.Item href="#action/3.1">T-Shirts</NavDropdown.Item>
                </Link>
                <Link to='/hoodies'>
                <NavDropdown.Item href="#action/3.2">Hoodies</NavDropdown.Item>
                </Link>
                <Link to='/hats'>
                <NavDropdown.Item href="#action/3.3">Hats</NavDropdown.Item>
                </Link>
                <Link to='/beanies'>
                <NavDropdown.Item href="#action/3.3">Beanies</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">All Products</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">New Arrivals</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Return Policy</Nav.Link>
              <Nav.Link href="#deets">About Us</Nav.Link>
              <Nav.Link href="#deets">
              <i class="fas fa-shopping-cart cart-icon"></i>
              <span>0</span>
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          
         );
    }
}
 
export default ReactNavbar;