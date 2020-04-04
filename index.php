<?php
    include("./PHP/include/header.inc");
    include("./PHP/include/navbar.inc");

    switch ($_GET["page"]) {
        case "news":
            require("./Pages/news.html");
        break;
        case "events":
            require("./Pages/events.html");
        break;
        case "environment":
            require("./Pages/environment.html");
        break;
        case "contact":
            require("./Pages/contact.html");
        break;
        default:
            include("./Pages/index.html");
        break;
    }

    include("./PHP/include/footer.inc");
?>