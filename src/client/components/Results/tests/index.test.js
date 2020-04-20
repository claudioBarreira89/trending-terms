import React from "react";
import { render } from "@testing-library/react";
import Results from "../";

const props = {
    data: {
        term1: [],
        term2: []
    },
    terms: ["term1", "term2"]
};

describe("Results", () => {
    it("Should exist", () => {
        const { container } = render(<Results />);
        expect(container).not.toBeNull();
    });

    describe("Rendering component", () => {
        it("Should render searched terms", () => {
            const { getByText } = render(<Results {...props} />);

            expect(getByText("term1")).toBeDefined();
            expect(getByText("term2")).toBeDefined();
        });

        it("Should render error when data objects are empty", () => {
            const { getByText } = render(<Results {...props} />);

            expect(
                getByText("There's no data available for the searched terms.")
            ).toBeDefined();
        });
    });
});
