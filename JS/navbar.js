document.write(/*html*/`
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
        <li>
            <a href="/quizzes"><h2>Quizzes</h2></a>
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
</div>`);