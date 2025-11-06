import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

describe("Field and Select interaction for Name and Type selection", () => {
    it("Should let the user enter a Name", () => {
        render(<Form />);
        const allInputs = screen.getAllByTestId("field-testid");
        const inputName = allInputs[0];
        fireEvent.change(inputName, {target: {value: "Cody"}});
        expect(inputName.value).toBe("Cody");
    });
    it("Should let the user choose a type from the Dropdown", () => {
        render(<Form />);
        const selectButton = screen.getByTestId("collapse-button-testid")
        fireEvent.click(selectButton);

        const allTypes = screen.getAllByText(function (_, element) {
        return element?.textContent?.includes("Personnel");
        });
        const type = allTypes[0];
        fireEvent.click(type);
    });
});