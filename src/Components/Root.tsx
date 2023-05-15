import { Outlet } from "react-router-dom";
import Header from "./Header";

export const Root = (): JSX.Element => {
    return (
        <>
            <Header />
            <Outlet />
            <footer style={{ height: "10px" }} />
        </>
    );
};