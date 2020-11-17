/* document.write(`
<div class="nav">
    <ul>
        <li>
            <a href="/"><h2>Home</h2></a>
        </li>
        <li>
            <a href="/news"><h2>News</h2></a>
        </li>
        <li class="dropdown">
            <a href="/events" class="dropbtn"><h2>Events and Campaigns</h2></a>
            <div class="dropdown-content">
                <a href="/events"><h3>All Events</h3></a>
                <a href="/environment"><h3>Environmental Campaign</h3></a>
            </div>
        </li>
        <li class="dropdown" style="float: right;">
            <a href="/contact" class="dropbtn"><h2>Contact Us</h2></a>
            <div class="dropdown-content">
                <a href="/contact"><h3>Contact Information</h3></a>
                <a class="twitter" href="https://twitter.com/TBSHSInteract"><h3>Twitter</h3></a>
                <a class="facebook" href="https://fb.me/TBSHSInteract"><h3>Facebook</h3></a>
                <a class="youtube" href="https://www.youtube.com/channel/UCSaaFS8LzdlEt4mFirY4-qg/featured"><h3>YouTube</h3></a>
            </div>
        </li>
    </ul>
</div>`); */;

const socialLogos = {
    Twitter: "Images/logo_twitter.png",
    Facebook: "Images/logo_facebook.png",
    YouTube: "Images/logo_youtube.png"
};
const SocialNavLink = (site, link) => /*html*/`
    <a id="${site.toLowerCase()}" class="nav-social-link" href="${link}">
        <img src="${socialLogos[ site ]}" alt="${site}" />
        <h3>${site}</h3>
    </a>
`;

document.write(/*html*/`
<div id="banner"></div>
<div id="header">
    <div id="nav">
        <a class="nav-list-item" href="/"><h2>Home</h2></a>
        <a class="nav-list-item" href="/news"><h2>News</h2></a>
        <a class="nav-list-item" href="/events"><h2>Events</h2></a>
        <a class="nav-list-item" href="/environment"><h2>Environment</h2></a>
        <div id="nav-dropdown">
            <a class="nav-list-item" href="/contact"><h2>Contact</h2></a>
            <div id="nav-dropdown-content">
                ${SocialNavLink("Twitter", "https://twitter.com/TBSHSInteract")}
                ${SocialNavLink("Facebook", "https://fb.me/TBSHSInteract")}
                ${SocialNavLink("YouTube", "https://www.youtube.com/channel/UCSaaFS8LzdlEt4mFirY4-qg/featured")}
            </div>
        </div>
    </div>

    <div id="nav-mobile">
        <div id="nav-dropdown">
            <a><h2>☰</h2></a>
            <div id="nav-dropdown-content">
                <a class="nav-list-item" href="/"><h2>Home</h2></a>
                <a class="nav-list-item" href="/news"><h2>News</h2></a>
                <a class="nav-list-item" href="/events"><h2>Events</h2></a>
                <a class="nav-list-item" href="/environment"><h2>Environment</h2></a>
            </div>
        </div>
    </div>
</div>`);