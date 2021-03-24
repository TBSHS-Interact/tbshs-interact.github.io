const events = {
    "2020 - 2021": {
        "Sixth Form Charities Day 2021": {
            image: "logo_CazFest.jpeg",
            text: "Sixth Form charities day has been a tradition at TBSHS for many years. Since it's beginning, it has been recognised every year (apart from 2020 due the national lockdown), and has always been a great success.<br>This day is in honour and memory of Caroline Johnstone and Alex Cheer. Caroline (Caz) and Alex were members of the TBSHS Sixth Form at similar times, and both very sadly passed away while they were students. Caz's passing sparked the creation of CazFest, a local music festival which ran annually for several years.<br>On Sixth Form charities day, boys attend school dressed as fairies in memory of Caz, while the girls attend dressed as soldiers in memory of Alex, who was a devoted cadet.<br>This year, on <a>Wednesday, 24 March</a>, a bake sale was organised by Caroline O'Prey and Aisha Jones, with the assistance of Interact, which raised £188.79. Sixth Form students were also encouraged to each donate £2.<br>All funds raised are split between <a href='https://http://www.cazfest.com'>CazFest</a> (which raises money for <a href='https://https://www.c-r-y.org.uk'>CRY (Cardiac Risk in the Young)</a> and <a href='https://https://www.helpforheroes.org.uk'>Help for Heroes</a>)."
        },
        "TBSHS Remembrance Service": {
            image: "logo_poppy-appeal.png",
            text: "2020 has been a difficult year for us all. Due to COVID-19 restrictions, we were unable to sell poppies in school as we usually would. This did not, however, stop us from holding our traditional Remembrance Day service on <a>Wednesday, 11 November 2020, at 11:00</a>. The service took place outside this year, and ended with a two minutes silence. Despite being unable to sell poppies this year, a total of £800.50 was raised via online donations."
        },
        "Food Bank Collection": {
            image: "logo_food-bank.jpg",
            text: "To mark the end of the first half term of our 2020-2021 school year, students were encouraged to make donation to the <a href='https://www.bishopsstortfordfoodbank.com'>Bishop's Stortford Food Bank</a>. Due to the effects of COVID-19 on the world and our nation, manny people require services such as the food bank more than ever. The student body came together on <a>Friday, 23 October 2020</a> to donate over three shopping trolleys worth of items."
        }
    },
    "2019 - 2020": {
        "International Women's Day": {
            image: "logo_iwd.png",
            text: "This day is very important at TBSHS. Although we are a single-sex male school from years 7-11, our Sixth Form is mixed education, and is the heart of the school. <a href='https://www.internationalwomensday.com'>IWD</a> was on <a>Sunday, 8 March 2020</a>, and despite not being in school on this day, we recognised it, within school, for a whole week afterwards."
        },
        "Shrove Tuesday": {
            image: "shrove-tuesday.png",
            text: "Everybody loves pancake day at TBSHS. For the past few years, Interact have sold pancakes to raise money for some local charities. This year on <a>Tuesday, 25 February 2020</a> we raised £392 for <a href='https://www.saintmichaelweb.org.uk'>St. Michael's Church</a>."
        },
        "Wear It Red for World Cancer Day": {
            image: "world-cancer-day.jpg",
            text: "We marked World Cancer Day on <a>Tuesday, 4 February 2020</a> by wearing one item of red with our school uniforms. On days like this, the school comes together to great things. This year we raised £900 for <a>various cancer charities</a>."
        },
        "Holocaust Memorial Day": {
            image: "holocaust-memorial-day.jpg",
            text: "Once again at TBSHS we marked <a>Monday, 27 January 2020</a> as a day to remember the horrific persecution faced by people during the Holocaust. This year, Holocaust survivor Hannah Lewis came to the school to speak to the Sixth Form about her memories during this time."
        },
        "Martin Luther King Day": {
            image: "mlk.jpeg",
            text: "<a>Monday, 20 January 2020</a> was a day to remember how Martin Luther King fought, peacefully, for his rights. Martin Luther King is well known for his civil rights campaign in America in the 1960s. He is perhaps best known for his \"I have a dream\" speech."
        },
        "Tesco Bag Packing with Rotary": {
            image: "gallery/Bag_Packing_for_Rotary.jpg",
            text: "For thirteen hours across <a>Saturday, 14 December 2019</a> and <a> Sunday, 15 December 2019</a>, a large number of students took part in bag packing at Tesco in Bishop's Stortford to help the <a href='https://www.rotary.org/en'>Rotary Club</a> raise money towards their Christmas Food Parcels to help less fortunate families at this time.<br>This event is one we do most years in Waitrose and Tesco, and always has an outstanding turnout of students."
        },
        "Showcase 2019": {
            image: "logo_showcase-2019.png",
            text: "Our annual talent show took place on <a>Friday, 13 December 2019, at 19: 00</a>, in the school hall. All money raised went to the <a href='https://www.bishopsstortfordfoodbank.com'>Food Bank</a>, the <a href='https://www.neighbourly.com/project/5baa4558c7ac89260476b991/information'>Night Shelter</a> and <a href='https://www.saintmichaelweb.org.uk'>St. Michael's Church</a>.",
        },
        "TBSHS Poppy Appeal": {
            image: "logo_poppy-appeal.png",
            text: "It was that time of year again. A time to remember those who have fought and died in service of our country. Many students bought a poppy to show their appreciation for the people who have fought for us and our freedom. Our annual remembrance service took place on <a>Monday, 11 November 2019, at 11:00</a>."
        },
        "Wear It Blue for Mental Health": {
            image: "logo_mind.png",
            text: "This themed non-uniform day in October, was an opportunity for people to wear one item of blue clothing with their school uniform. Money raised went towards raising awareness for the mental health charity <a href='https://www.mind.org.uk'>Mind</a>. This is an issue which needs to be talked about. We all have mental health, we should all feel comfortable talking about it."
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