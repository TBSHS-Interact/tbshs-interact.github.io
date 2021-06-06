import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Header";

export default class News extends Component {
    public render(): JSX.Element {
        document.title = "TBSHS Interact | News";

        const news = [{
            date: <h1>Wednesday, 17 June 2020</h1>,
            desc: <p>Our new YouTube channel launched today <a href="https://www.youtube.com/channel/UCSaaFS8LzdlEt4mFirY4-qg/featured">@TBSHSInteract</a>.<br />We will be streaming quizzes weekly, open to everyone.</p>
        }, {
            date: <h1>Thursday, 13 May 2020</h1>,
            desc: <p>This website launched today as a part of Interact's new and improved online image.</p>
        }, {
            date: <h1>Tuesday, 5 November 2019</h1>,
            desc: <p>Our new Facebook page launched today <a href="https://fb.me/TBSHSInteract">@TBSHSInteract</a>.</p>
        }, {
            date: <h1>Monday, 4 November 2019</h1>,
            desc: <p>Our new Twitter feed launched today <a href="https://twitter.com/TBSHSInteract">@TBSHSInteract</a>.</p>
        }];

        return (
            <>
                <Header />
                <Container style={{ width: "90%" }}>
                    <h1>News</h1>
                    <br />
                    {news.map((item) => <>{item.date}{item.desc}<br/></>)}
                </Container>
            </>
        );
    }
}
