import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Header";

export default class Contact extends Component {
    public render(): JSX.Element {
        document.title = "TBSHS Interact | Contact";

        const personnel: Array<{ role: string; names: string[]; }> = [{
            role: "Coordinator (Staff)",
            names: ["Simon Etheridge"]
        }, {
            role: "President",
            names: ["Ollie Jones", "Dan Palmer"]
        }, {
            role: "Vice President",
            names: ["Sam Williams", "Kieran Carter"]
        }, {
            role: "Secretary",
            names: ["Sam Williams"]
        }, {
            role: "Treasurer",
            names: ["Kieran Carter"]
        }, {
            role: "Public Relations",
            names: ["Ollie Jones"]
        }, {
            role: "Events Manager",
            names: ["Archie Summerfield"]
        }];
        
        return (
            <>
                <Header />
                <Container style={{ width: "90%" }}>
                    <h1>Contact Information</h1>
                    <p>To help raise money and awareness for good causes, get in contact in any of the following ways.</p>
                    <p>
                        Twitter: <a href="https://twitter.com/TBSHSInteract">@TBSHSInteract</a><br />
                        Facebook: <a href="https://fb.me/TBSHSInteract">@TBSHSInteract</a><br />
                        YouTube: <a href="https://www.youtube.com/channel/UCSaaFS8LzdlEt4mFirY4-qg/featured">TBSHS Interact</a><br />
                        Email: <a href="mailto:interact@tbshs.org">interact@tbshs.org</a><br />
                    </p>
                    <h1>Personnel</h1>
                    <p dangerouslySetInnerHTML={{ __html: personnel.map((person) => `${person.names.length > 1 ? `${person.role}s` : person.role} - ${person.names.map((name) => `<a href="">${name}</a>`).join(" and ")}`).join("<br>") }}></p>
                </Container>
            </>
        );
    }
}
