import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Gallery1 from "../Images/Gallery/1.jpg";
import Gallery2 from "../Images/Gallery/2.jpg";
import Gallery3 from "../Images/Gallery/3.jpg";
import Gallery4 from "../Images/Gallery/4.jpg";
import Gallery5 from "../Images/Gallery/5.jpg";
import Gallery6 from "../Images/Gallery/6.jpg";
import Gallery7 from "../Images/Gallery/7.jpg";
import Gallery8 from "../Images/Gallery/8.jpg";
import Gallery9 from "../Images/Gallery/9.jpg";

class Image extends Component {
    constructor(public readonly props: { src: string; caption: string; }) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <Carousel.Item>
                <img className="d-block w-100" src={this.props.src} alt={this.props.caption} style={{maxHeight: "50%"}} />
                <Carousel.Caption>
                    <p>{this.props.caption}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    }
}

export default class Header extends Component {
    public render(): JSX.Element {
        return (
            <Carousel>
                <Image src={Gallery1} caption="Bag packing at Tesco" />
                <Image src={Gallery2} caption="Bag packing for Rotary" />
                <Image src={Gallery3} caption="Comedy at Showcase 2019" />
                <Image src={Gallery4} caption="Former student returns for Showcase 2019" />
                <Image src={Gallery5} caption="Velocity at Showcase 2019" />
                <Image src={Gallery6} caption="Food Bank Donations" />
                <Image src={Gallery7} caption="TBSHS Remembrance Service" />
                <Image src={Gallery8} caption="Lower school at Remembrance Service" />
                <Image src={Gallery9} caption="Upper school at Remembrance Service" />
            </Carousel>
        );
    }
}