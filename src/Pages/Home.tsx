import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Gallery from "../Components/Gallery";

export default class Home extends Component {
    public render(): JSX.Element {
        return (
            <Container style={{ width: "90%" }}>
                <h1>TBSHS Interact</h1>
                <br />
                <Gallery />
                <br />
                <h2>Who are we?</h2>
                <p>
                    Interact is a global organisation, founded by the <a href="https://www.rotary.org/">Rotary Club</a>, to raise money
                    and awareness for various charities. We do our best to help our community, and the planet as a whole, in any way we
                    can.
                    <br />
                    There are over 20 000 Interact clubs across the globe, operating in 159 different countries, with over 450 000
                    members.
                    <br />
                    Interact has been running at <a href="http://www.tbshs.org/">TBSHS</a> for many years now, having been founded by
                    former Headmaster Ian Shaw and Rotarian Brian Edwards. Since we started, we have raised many thousands of pounds,
                    each year, for a wide variety of charities and good causes.
                </p>
                <br/>
                <h2>How do we raise money?</h2>
                <p>
                    Within TBSHS, we the central hub for charity. Meeting weekly, we organise events to raise both awareness and funds
                    for good causes, both local and global. We also publicise the charitable efforts of other students within the
                    school.
                    <br/>
                    The events we run range from small things, such as collections, to much larger events such as our annual talent show
                    - SHOWCASE.
                    <br />
                    We are particularly proud of our efforts in raising money for national campaigns, including, but not limited to, The
                    Poppy Appeal, Comic/Sports Relief and Children in Need.
                </p>
                <br/>
                <h2>How can you get involved?</h2>
                <p>
                    If you want to play a part in helping other people, and you are a student at The Bishop's Stortford High School,
                    come along to Room 8 every Wednesday lunchtime to join our meetings.
                    <br/>
                    We will discuss new ideas for how we can continue to help our community both within, and outside of the school.
                    <br/>
                    If you want to run an event, let us know and we can provide support and publicity for your efforts.
                    <br/><br/>
                    If you are not a student at TBSHS, you can still get involved with Rotary and Interact.
                    <br/>
                    Find out if your school has an Interact club. If it doesn't, create one, and we will gladly provide advice and
                    support.
                    <br/>
                    Go to <a href="https://www.rotary.org/en/get-involved/interact-clubs">www.rotary.org</a> to find out more.
                </p>
            </Container>
        );
    }
}
