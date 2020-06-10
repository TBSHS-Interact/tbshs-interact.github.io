const personel = [
    {
        role: "Coordinator (Staff)",
        names: [ "Simon Etheridge" ]
    }, {
        role: "President",
        names: [ "Ollie Jones", "Dan Palmer" ]
    }, {
        role: "Events Manager",
        names: [ "Archie Summerfield" ]
    }, {
        role: "Secretary",
        names: [ "Sam Williams" ]
    }, {
        role: "Treasurer",
        names: [ "Kieran Carter" ]
    }
];

document.write(personel.map((person) => `${person.names.length > 1 ? `${person.role}s` : person.role} - ${person.names.map((name) => `<a>${name}</a>`).join(" and ")}`).join("<br>"));