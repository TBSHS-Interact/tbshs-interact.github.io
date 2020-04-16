document.write(/*html*/`
<link rel="stylesheet" type="text/css" href="CSS/header.css">
<div class="banner"></div>
<ul>
    <li>
        <a href="/Interact"><h2>Home</h2></a>
    </li>

    <li>
        <a href="/Interact/news"><h2>News</h2></a>
    </li>

    <li class="sub">
        <a href="/Interact/events"><h2>Events and Campaigns</h2></a>
        <div class="dropdown">
            <ul>
                <li>
                    <a href="/Interact/events"><h3>Events</h3></a>
                </li>

                <li>
                    <a href="/Interact/environment"><h3>Environment</h3></a>
                </li>
            </ul>
        </div>
    </li>

    <li class="sub" style="float: right;">
        <a href="/Interact/contact"><h2>Contact Us</h2></a>
        <div class="dropdown">
            <ul>
                <li>
                    <a href="/Interact/contact"><h3>Contact Information</h3></a>
                </li>

                <li>
                    <a class="twitter" href="https://twitter.com/TBSHSInteract"><h3>Twitter</h3></a>
                </li>

                <li>
                    <a class="facebook" href="https://fb.me/TBSHSInteract"><h3>Facebook</h3></a>
                </li>
            </ul>
        </div>
    </li>
</ul>`);