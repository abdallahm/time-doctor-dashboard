import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import logo from '../resources/img/logo.svg';

class Navigation extends Component {
  render() {
    return (
      <Navbar className="navigation">
        <Navbar.Header>
          <Navbar.Brand>
            <img src={logo} className="logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer exact to="/">
              <NavItem eventKey={1} href="/">Dashboard</NavItem>
            </LinkContainer>
            <LinkContainer to="/edittime">
              <NavItem eventKey={2} href="/edittime">Edit Time</NavItem>
            </LinkContainer>
            <LinkContainer to="/screenshots">
              <NavItem eventKey={3} href="/screenshots">Screenshots</NavItem>
            </LinkContainer>
            <LinkContainer to="/reports">
              <NavItem eventKey={4} href="/reports">Reports</NavItem>
            </LinkContainer>
            <LinkContainer to="/payments">
              <NavItem eventKey={5} href="/payments">Payments</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;