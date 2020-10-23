import React, { Component } from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";

import '../styles/HomePage.css';
import Footer from "../components/Footer";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Container fluid className="body">
                <div className="logo-container">
                    <Row>
                        <Col xs={4} md={5}></Col>
                        <Col xs={4} md={2}>
                            <Image src={require("../assets/logo.png")} className="logo" />
                        </Col>
                        <Col xs={4} md={5}></Col>
                    </Row>

                    <Row className="brand-row">
                        <Col xs={3}></Col>
                        <Col xs={6}>
                            <p className="brand-name">Movily</p>
                        </Col>
                        <Col xs={3}></Col>
                    </Row>

                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={10}>
                            <p className="slogan">Find you movies now</p>
                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                </div>

                <Form className="form">
                    <Form.Group as={Row}>
                        <Col xs={1} md={3}></Col>
                        <Col xs={10} md={6}>
                            <div className="search-cotainer">
                                <Form.Control type="text" placeholder="Movie Name" className="search-input" />
                                <Button type="submit" className="search-button">
                                    <FontAwesomeIcon icon={faSearch} color="#ed0015" />
                                </Button>
                            </div>
                        </Col>
                        <Col xs={1} md={3}></Col>
                    </Form.Group>
                </Form>

                <Footer />
            </Container>
        );
    }
}
