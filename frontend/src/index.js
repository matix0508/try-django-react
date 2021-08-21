import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import {
    BrowserRouter as Router,

} from "react-router-dom";
import MyNavBar from "./components/MyNavBar";
import Routes from "./components/routes";
import DarkMode from "./components/DarkMode";
import Footer from "./components/Footer";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: true,
            brand: "Mati",
            user: null,
        }
        this.switchMode = this.switchMode.bind(this)
        this.initialDarkMode = this.initialDarkMode.bind(this)
        this.saveDarkMode = this.saveDarkMode.bind(this)
    }

    initialDarkMode() {
        this.setState({darkMode: localStorage.getItem("darkMode") === "1"})
    }

    componentDidMount() {
        this.refreshUser()
        this.initialDarkMode()
    }

    saveDarkMode() {
        localStorage.setItem("darkMode", this.state.darkMode ? "1" : "0");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.refreshUser()
        if (prevState.darkMode !== this.state.darkMode) {
            this.saveDarkMode()
        }
    }


    refreshUser() {
        const axios = require('axios');
        axios.get('/api/current_user')
            .then((res) => {
                const user = res.data.user;
                if (user !== this.state.user) {
                    this.setState({user: user})
                }
            })
            .catch((err) => console.log(err))
            .then(() => console.log("Anything Happened?"));

    }

    switchMode() {
        this.setState({darkMode: !this.state.darkMode})
        this.saveDarkMode()
    }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <MyNavBar
                            darkMode={this.state.darkMode}
                            title={this.state.brand}
                            username={this.state.user}
                            reload={() => this.setState({})}
                        >
                            <DarkMode on={this.state.darkMode} handler={() => this.switchMode()}/>
                        </MyNavBar>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Routes
                            darkMode={this.state.darkMode}
                        />
                    </Col>

                </Row>
                {/*<Footer darkMode={this.state.darkMode} />*/}

            </Container>
        )
    }

    componentWillUnmount() {
        localStorage.setItem("darkMode", this.state.darkMode);
    }
}


const root = document.getElementById('app')
ReactDOM.render(
    <Router>
        <App/>
    </Router>
    , root
)