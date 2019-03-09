import * as React from "react";
import { Route } from "react-router-dom";

const Home = React.lazy(() => import("./components/home"));

const Routes = () => (
    <div className="container-fluid">
        <Route exact path="/" render={() => <Home text="React typescript app" />} />
    </div>
);
export default Routes;
