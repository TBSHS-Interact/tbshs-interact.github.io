const personnel = [
    {
        role: "Coordinator (Staff)",
        names: ["Simon Etheridge"]
    },
    {
        role: "President",
        names: ["Ollie Jones", "Dan Palmer"]
    },
    {
        role: "Vice President",
        names: ["Sam Williams", "Kieran Carter"]
    },
    {
        role: "Secretary",
        names: ["Sam Williams"]
    },
    {
        role: "Treasurer",
        names: ["Kieran Carter"]
    },
    {
        role: "Public Relations",
        names: ["Ollie Jones"]
    },
    {
        role: "Events Manager",
        names: ["Archie Summerfield"]
    }
];

document.write(personnel.map((person) => `${person.names.length > 1 ? `${person.role}s` : person.role} - ${person.names.map((name) => `<a>${name}</a>`).join(" and ")}`).join("<br>"));