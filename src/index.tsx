import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";

render(
    <React.Suspense fallback={<div />}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </React.Suspense>,
    document.getElementById("react-app"),
);
