import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export default function MyNav(props) {
    return (
        <Navbar bg={props.darkMode ? "dark" : "light"} expand="lg">
            <Container>
                <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {props.children}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    )
}