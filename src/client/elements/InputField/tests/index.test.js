import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputField from "..";

describe("InputField", () => {
    it("Should exist", () => {
        const { container } = render(<InputField />);
        expect(container).not.toBeNull();
    });

    describe("Rendering component", () => {
        it("Should render loading spinner if prop isLoading is true", () => {
            const { getByTestId } = render(<InputField isLoading={true} />);

            expect(getByTestId("loadingSpinner")).toBeDefined();
        });
    });

    describe("Handling events", () => {
        it("Should handle input value change", () => {
            const handleChange = jest.fn();
            const { getByTestId } = render(
                <InputField handleChange={handleChange} />
            );

            fireEvent.change(getByTestId("inputField"), {
                target: { value: "Test" }
            });

            expect(handleChange).toHaveBeenCalledWith("Test");
        });

        it("Should handle input key press", () => {
            const handleClick = jest.fn();

            const { getByTestId } = render(
                <InputField handleClick={handleClick} />
            );

            fireEvent.keyPress(getByTestId("inputField"), {
                key: "Enter",
                charCode: 13
            });

            expect(handleClick).toHaveBeenCalled();
        });
    });
});
