import { Container, Nav, Navbar } from "react-bootstrap";
import React, { Component } from "react";
import Banner from "../Images/banner.png";
import EcoBanner from "../Images/banner_green.png";

export default class Header extends Component {
    public render(): JSX.Element {
        return (
            <header>
                <img id="banner" alt="Banner" src={window.location.href.split("#")[1] === "/environment" ? EcoBanner : Banner} style={{
                    maxWidth: "100%",
                    height: "33.3vw",
                    backgroundAttachment: "fixed",
                    backgroundSize: "contain",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat"
                }} />
                <Navbar bg={window.location.href.split("#")[1] === "/environment" ? "secondary" : "primary"} variant="dark" sticky="top" expand="lg" id="navbar">
                    <Container>
                        <Navbar.Brand href="/">TBSHS Interact</Navbar.Brand>
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav className="ml-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/news">News</Nav.Link>
                                <Nav.Link href="/events">Events</Nav.Link>
                                <Nav.Link href="/environment">Environment</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <br/>
            </header>
        );
    }
}