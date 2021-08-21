import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MyCard(props) {
    return (
        <Row className={"m-2"}>
            <Col>
                <Card
                    bg={props.darkMode ? "dark" : "light"}
                    text={props.darkMode ? "light" : "dark"}
                >
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{props.children}</Card.Text>
                        {props.href && <Button href={props.href}>Look me up</Button>}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}