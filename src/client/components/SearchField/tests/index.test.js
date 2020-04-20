import React from "react";
import { render } from "@testing-library/react";
import SearchField from "..";

describe("SearchField", () => {
    it("Should exist", () => {
        const { container } = render(<SearchField />);
        expect(container).not.toBeNull();
    });
});
