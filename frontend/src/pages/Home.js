import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home(props) {
    return (
        <Container>
            <Row>
                <Col>
                    {props.darkMode}
                </Col>
            </Row>
        </Container>
    )
}