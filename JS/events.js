const events = {
    "2019 - 2020": {
        "International Women's Day": {
            image: "logo_iwd.png",
            text: "This day is very important at TBSHS. Although we are a single-sex male school from years 7-11, our Sixth Form is mixed education, and is the heart of the school. IWD was on <a>Sunday, 8 March 2020</a>, and despite not being in school on this day, we recognised it, within school, for a whole week afterwards."
        },
        "Shrove Tuesday": {
            image: "shrove-tuesday.png",
            text: "Everybody loves pancake day at TBSHS. For the past few years, Interact have sold pancakes to raise money for some local charities. This year on <a>Tuesday, 25 February 2020</a> we raised £392 for St. Michael's Church."
        },
        "Wear It Red for World Cancer Day": {
            image: "world-cancer-day.jpg",
            text: "We marked World Cancer Day on <a>Tuesday, 4 February 2020</a> by wearing one item of red with our school uniforms. On days like this, the school comes together to great things. This year we raised £900 for cancer charities."
        },
        "Holocaust Memorial Day": {
            image: "holocaust-memorial-day.jpg",
            text: "Once again at TBSHS we marked <a>Monday, 27 January 2020</a> as a day to remember the horrific persecution faced by people during the Holocaust. This year, Holocause survivor Hannah Lewis came to the school to speak to the Sixth Form about her memories during this time."
        },
        "Martin Luther King Day": {
            image: "mlk.jpeg",
            text: "<a>Monday, 20 January 2020</a> was a day to remember how Martin Luther King fought, peacfully, for his rights. Martin Luther King is well known for his civil rights campaign in America in the 1960s. He is perhaps best known for his \"I have a dream\" speech."
        },
        "Tesco Bag Packing with Rotary": {
            image: "gallery/Bag_Packing_for_Rotary.jpg",
            text: "For thirteen hours accross <a>Saturday, 14 December 2019</a> and <a> Sunday, 15 December 2019</a>, a large number of students took part in bag packing at Tesco in Bishop's Stortford to help the Rotary Club raise money towards their Christmas Food Parcels to help less fortunate families at this time.\nThis event is one we do most years in Waitrose and Tesco, and always has an outstanding turnout of students."
        },
        "Showcase 2019": {
            image: "logo_showcase-2019.png",
            text: "Our annual talent show took place on <a>Friday, 13 December, at 19: 00</a>, in the school hall. All money raised went to the Food Bank, the Night Shelter and St. Michael's Church.",
        },
        "TBSHS Poppy Appeal": {
            image: "logo_poppy-appeal.png",
            text: "It was that time of year again. A time to remember those who have fought and died in service of our country. Many students bought a poppy to show their appreciation for the people who have fought for us and our freedom. Our annual rememberance service took place on <a>Monday, 11 November, at 11:00</a>."
        },
        "Wear It Blue for Mental Health": {
            image: "logo_mind.png",
            text: "This themed non-uniform day in October, was an opportunity for poeple to wear one item of blue clothing with their school uniform. Money raised went towards raising awareness for the mental health charity Mind. This is an issue which needs to be talked about. We all have mental health, we should all feel comfortable talking about it."
        }
    }
};

let output = /*html*/`<h1>Events</h1><p>To keep up with our latest Events, follow us on <a href="https://twitter.com/TBSHSInteract">Twitter</a> and <a href="https://fb.me/TBSHSInteract">Facebook</a>.</p><br>`;
Object.keys(events).forEach((year) => {
    output += /*html*/`<table>
        <tr>
            <h1>${year}</h1>
        </tr>`;
    Object.keys(events[ year ]).forEach((event) => {
        output += /*html*/`<tr>
            <td>
                <img class="eventIcon" src="Images/${events[ year ][ event ].image}">
            </td>
            <td>
                <h3>${event}</h3>
                <p>${events[ year ][ event ].text}</p>
            </td>
        </tr>`;
    });
    output += /*html*/`</table>`;
});
document.write(output);