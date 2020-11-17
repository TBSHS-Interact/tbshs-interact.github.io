// @ts-nocheck
class Gallery {
    constructor () {
        this.captions = [
            "Bag_Packing_at_Tesco",
            "Bag_Packing_for_Rotary",
            "Comedy_at_Showcase_2019",
            "Former_student_returns_for_Showcase_2019",
            "Velocity_at_Showcase_2019",
            "Food_Bank_Donations",
            "TBSHS_Remembrance_Service",
            "Lower_School_At_Remembrace_Service",
            "Upper_School_At_Remembrance_Service"
        ]; // Names of images wanted from src/img/Gallery folder
        this.images = this.captions.map(caption => `/Images/gallery/${caption}.jpg`); // Maps captions to file paths
        this.slideIndex = 1;
        this.interval = setInterval(() => this.plusSlides(1), 5000);
        this.writeHTML();
        this.showSlides(this.slideIndex);
    }

    writeHTML() {
        console.log("writing HTML");
        document.write(/*html*/`<link rel="stylesheet" type="text/css" href="CSS/gallery.css">`); // Adds link to css file and starts the slideshow div
        document.write(/*html*/`<div class="slideshow-container">`); // Starts slideshow div

        for (let i = 0; i < this.images.length; i++) {
            document.write(/*html*/`<div class="mySlides fade" style="text-align: center;">`); // Starts the image div
            document.write(/*html*/`<p style="color: #f5ab0a">${i + 1} / ${this.images.length}</p>`); // Show the image counter
            document.write(/*html*/`<img class="image" type="image/png" src="${this.images[ i ]}">`); // Shows the image
            document.write(/*html*/`<div class="text"><p>${this.captions[ i ].replace(/_/g, " ")}</p></div>`); // Shows the caption
            document.write(/*html*/`</div>`); // Ends the image div
        }

        document.write(/*html*/`<a class="prev" onclick="gallery.plusSlides(-1)">&#10094;</a>`); // Previous image button
        document.write(/*html*/`<a class="next" onclick="gallery.plusSlides(1)">&#10095;</a>`); // Next image button
        document.write(/*html*/`</div>`); // Ends slideshow div
        document.write(/*html*/`<br>`); // New line before dots

        document.write(/*html*/`<div style="text-align:center;">`); // Starts the dots div
        for (let i = 0; i < this.images.length; i++) document.write(/*html*/`<span class="dot" onclick="gallery.currentSlide(${i + 1})"></span>`); // Writes each dot
        document.write(/*html*/`</div>`); // Ends the dots div
    }

    showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");

        if (n > slides.length) this.slideIndex = 1;
        if (n < 1) this.slideIndex = slides.length;

        for (let i = 0; i < slides.length; i++) slides[ i ].style.display = "none";
        for (let i = 0; i < dots.length; i++) dots[ i ].className = dots[ i ].className.replace(" active", "");

        slides[ this.slideIndex - 1 ].style.display = "block";
        dots[ this.slideIndex - 1 ].className += " active";
    }

    // Next/previous controls
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
        clearInterval(this.interval);
        this.interval = setInterval(() => this.plusSlides(1), 5000);
    }

    // Thumbnail image controls
    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
        clearInterval(this.interval);
        this.interval = setInterval(() => this.plusSlides(1), 5000);
    }
}

const gallery = new Gallery();