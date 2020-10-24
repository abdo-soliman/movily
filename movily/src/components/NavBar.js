import * as React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Image } from "react-bootstrap";

import "../styles/NavBar.css";

const NavBar = () => {
    return (
        <Navbar className="navbar-container" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className="brand-cotnainer">
                    <Image src={require("../assets/logo.png")} className="brand-image" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
                        <Nav.Link as={Link} to="/tv">TV</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
