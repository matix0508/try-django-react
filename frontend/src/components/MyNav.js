import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button";
import LoginForm from "./LoginForm";
import LoginModal from "./LoginModal";

export default function MyNav(props) {
    return (
        <Navbar
            bg={props.darkMode ? "dark" : "light"}
            variant={props.darkMode ? "dark" : "light"}
            expand="lg"
        >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {props.children}
                    </Nav>
                    <div className={"mr-2"}>{props.additional}</div>

                    {!!props.username ?
                        (
                            <>
                                <Navbar.Text className="justify-content-end">
                                    Signed in as: {props.username}
                                </Navbar.Text>
                                <Button href={"/logout"}>Log Out</Button>
                            </>
                        ) : <LoginModal reload={props.reload} />}
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}