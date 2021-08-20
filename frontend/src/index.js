import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import {
    BrowserRouter as Router,

} from "react-router-dom";
import MyNavBar from "./components/MyNavBar";
import Routes from "./components/routes";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: false,
            brand: "Mati",
        }
        this.switchMode = this.switchMode.bind(this)
    }

    switchMode() {
        this.setState({darkMode: !this.state.darkMode})
    }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <MyNavBar
                            darkMode={this.state.darkMode}
                            title={this.state.brand}
                        />
                        <Button
                            variant={this.state.darkMode ? "outline-dark" : "outline-secondary"}
                            onClick={() => this.switchMode()}
                        >
                            {this.state.darkMode ? "Light Mode" : "Dark Mode"}
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Routes/>
                    </Col>

                </Row>

            </Container>
        )
    }
}


const root = document.getElementById('app')
ReactDOM.render(
    <Router>
        <App/>
    </Router>
    , root
)