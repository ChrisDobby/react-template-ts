import * as React from "react";

interface HomeProps {
    text: string;
}

const Home = (props: HomeProps) => (
    <div className="jumbotron">
        <h1 className="display-4" aria-label="home-text">
            {props.text}
        </h1>
    </div>
);

export default Home;
