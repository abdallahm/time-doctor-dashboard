import React, { Component } from 'react';
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
            <NavItem eventKey={1} href="/">Dashboard</NavItem>
            <NavItem eventKey={2} href="/edittime">Edit Time</NavItem>
            <NavItem eventKey={3} href="/screenshots">Screenshots</NavItem>
            <NavItem eventKey={4} href="/reports">Reports</NavItem>
            <NavItem eventKey={5} href="/payments">Payments</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;