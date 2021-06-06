import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Header";
import EcoLogo from "../Images/logo_eco.png";

export default class Environment extends Component {
    public componentDidMount() {
        // Recolour every <a> tag.
        const aTags: HTMLAnchorElement[] = [...document.getElementsByClassName("a") as any];
        aTags.forEach((tag) => tag.style.color = "#70e012");
    }

    public render(): JSX.Element {
        document.title = "TBSHS Interact | Environment";

        return (
            <>
                <Header />
                <Container style={{ width: "90%" }}>
                    <h1>Helping The Environment</h1>
                    <p>
                        In today's world, climate change poses a serious threat to us all. This problem was created by humans, it is
                        therefore our responsibility to fix it.
                    </p>
                    <br />
                    <h1>What can we do to help the environment?</h1>
                    <img src={EcoLogo} className="eco" alt="eco" style={{
                        height: "500px",
                        marginLeft: "auto",
                        margin: "auto",
                        display: "block"
                    }} />
                    <p>It's the small things that can make a big difference:
                        <br />
                        <a className="a" href="/#/environment">•</a> Turn off the lights when you leave the room.
                        <br/>
                        <a className="a" href="/#/environment">•</a> Recycle whenever possible.
                        <br />
                        <a className="a" href="/#/environment">•</a> Use reusable water bottles.
                        <br />
                        <a className="a" href="/#/environment">•</a> Put all rubbish in the bins and recycling bins around school.
                        <br />
                        <a className="a" href="/#/environment">•</a> Turn off all taps when you are done with them.
                        <br />
                        <a className="a" href="/#/environment">•</a> Use hand-dryers instead of paper towels.
                        <br />
                        <a className="a" href="/#/environment">•</a> If possible, walk or cycle to and from school, or share a lift with someone else.
                        <br />
                        <a className="a" href="/#/environment">•</a> Use reusable bags instead of plastic bags.
                        <br />
                        <a className="a" href="/#/environment">•</a> Avoid printing unless absolutely necessary, email your work instead.
                        <br />
                        <a className="a" href="/#/environment">•</a> Try not to throw food away.
                        <br />
                        <a className="a" href="/#/environment">•</a> Speak up when you see people dropping litter.
                        <br />
                        <a className="a" href="/#/environment">•</a> Pick up any litter you find lying around.
                        <br />
                        <a className="a" href="/#/environment">•</a> Volunteer to do litter picks in your local area.
                        <br />
                        <a className="a" href="/#/environment">•</a> Donate to wildlife trusts if you can.
                    </p>
                </Container>
            </>
        );
    }
}
