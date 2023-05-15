import "./App.scss";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import React, { Component } from "react";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Events from "./Pages/Events";
import Environment from "./Pages/Environment";
import Contact from "./Pages/Contact";
import { Root } from "./Components/Root";

export default class App extends Component {
    public render(): JSX.Element {
        const pages = [
            { element: <Home />, link: "/" },
            { element: <News />, link: "/News" },
            { element: <Events />, link: "/Events" },
            { element: <Environment />, link: "/Environment" },
            { element: <Contact />, link: "/Contact" },
            { element: <Error />, link: "*" }
        ];

        const router = createBrowserRouter(createRoutesFromElements(
            // Creates a base root, passing the Root component as an element.
            <Route element={<Root />} path="/">
                {
                    // Maps each page object into a Route element.
                    pages.map(({ element, link }, i) => (
                        <Route
                            element={element}
                            index={link === "/"}
                            key={i}
                            loader={(): string => (document.title = link.length > 1 ? `TBSHS Interact | ${link.slice(1)}` : "TBSHS Interact")}
                            path={link === "/" ? "" : link}
                        />
                    ))
                }
            </Route>
        ));

        return <RouterProvider router={router} />;
    }
}
