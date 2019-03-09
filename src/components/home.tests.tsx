import "jest-dom/extend-expect";
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Home from "./home";

describe("home", () => {
    beforeEach(cleanup);
    it("should render the text", () => {
        const text = "test text";
        const { getByLabelText } = render(<Home text={text} />);
        const header = getByLabelText("home-text");

        expect(header).toHaveTextContent(text);
    });
});
