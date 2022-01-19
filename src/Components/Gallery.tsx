import React, { Component } from "react";
import { Carousel, Image } from "react-bootstrap";
import Gallery1 from "../Images/Gallery/1.jpg";
import Gallery2 from "../Images/Gallery/2.jpg";
import Gallery3 from "../Images/Gallery/3.jpg";
import Gallery4 from "../Images/Gallery/4.jpg";
import Gallery5 from "../Images/Gallery/5.jpg";
import Gallery6 from "../Images/Gallery/6.jpg";
import Gallery7 from "../Images/Gallery/7.jpg";
import Gallery8 from "../Images/Gallery/8.jpg";
import Gallery9 from "../Images/Gallery/9.jpg";

const images: Array<{ caption: string; src: string; }> = [
    { caption: "Bag packing at Tesco", src: Gallery1 },
    { caption: "Bag packing for Rotary", src: Gallery2 },
    { caption: "Comedy at Showcase 2019", src: Gallery3 },
    { caption: "Former student returns for Showcase 2019", src: Gallery4 },
    { caption: "Velocity at Showcase 2019", src: Gallery5 },
    { caption: "Food Bank Donations", src: Gallery6 },
    { caption: "TBSHS Remembrance Service", src: Gallery7 },
    { caption: "Lower school at Remembrance Service", src: Gallery8 },
    { caption: "Upper school at Remembrance Service", src: Gallery9 }
];

export default class Gallery extends Component {
    public render(): JSX.Element {
        return (
            <Carousel nextLabel="" prevLabel="">
                {images.map((image) => (<Carousel.Item style={{ height: "500px", textAlign: "center" }}>
                    <Image src={image.src} alt={image.caption} height="100%" />
                    <Carousel.Caption>
                        <h1>{image.caption}</h1>
                    </Carousel.Caption>
                </Carousel.Item>))}
            </Carousel>
        );
    }
}