import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">
        <Col>
          <Row style={{ alignItems: 'center' }}>
            <FontAwesomeIcon icon={faCode} size='2x' />
            <h1 style={{ marginLeft: '8px', marginBottom: 0 }}>Chase Hardin</h1>
          </Row>
        </Col>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" >
        <Nav>
          <Nav.Link href='/'>HOME</Nav.Link>
          <Nav.Link href='/about/'>ABOUT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

