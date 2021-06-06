import React, { Component } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import Gallery1 from "../Images/Gallery/1.jpg";
import Gallery2 from "../Images/Gallery/2.jpg";
import Gallery3 from "../Images/Gallery/3.jpg";
import Gallery4 from "../Images/Gallery/4.jpg";
import Gallery5 from "../Images/Gallery/5.jpg";
import Gallery6 from "../Images/Gallery/6.jpg";
import Gallery7 from "../Images/Gallery/7.jpg";
import Gallery8 from "../Images/Gallery/8.jpg";
import Gallery9 from "../Images/Gallery/9.jpg";

const images: ReactImageGalleryItem[] = [
    { original: Gallery1, thumbnail: Gallery1, description: "Bag packing at Tesco" },
    { original: Gallery2, thumbnail: Gallery2, description: "Bag packing for Rotary" },
    { original: Gallery3, thumbnail: Gallery3, description: "Comedy at Showcase 2019" },
    { original: Gallery4, thumbnail: Gallery4, description: "Former student returns for Showcase 2019" },
    { original: Gallery5, thumbnail: Gallery5, description: "Velocity at Showcase 2019" },
    { original: Gallery6, thumbnail: Gallery6, description: "Food Bank Donations" },
    { original: Gallery7, thumbnail: Gallery7, description: "TBSHS Remembrance Service" },
    { original: Gallery8, thumbnail: Gallery8, description: "Lower school at Remembrance Service" },
    { original: Gallery9, thumbnail: Gallery9, description: "Upper school at Remembrance Service" }
];

export default class Gallery extends Component {
    public render(): JSX.Element {
        return (
            <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} showIndex={true} autoPlay={true} />
        );
    }
}