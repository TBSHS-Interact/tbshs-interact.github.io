import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Header";

export default class Error extends Component {
    public render(): JSX.Element {
        document.title = "TBSHS Interact | 404 Error";
        return (
            <>
                <Header />
                <Container style={{ width: "90%" }}>
                    <h1>404 - Page not found.</h1>
                    <p>The page you are looking for does not exist.</p>
                </Container>
            </>
        );
    }
}
