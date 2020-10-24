import * as React from "react";
import { Row, Col, Image } from "react-bootstrap";

import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer fixed-bottom">
            <Row className="footer-image-row">
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6}>
                    <div className="footer-image-container">
                        <Image src={require("../assets/the_moviedb_logo.svg")} className="footer-image" />
                    </div>
                </Col>
                <Col xs={0} md={3}></Col>
            </Row>
            <Row className="footer-text-row">
                <Col xs={1}></Col>
                <Col xs={10}>
                    <p className="footer-text">This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </footer>
    )
}

export default Footer;
