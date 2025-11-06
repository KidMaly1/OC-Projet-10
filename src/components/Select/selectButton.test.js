import Select from ".";
import { render, screen } from "@testing-library/react";

describe("button verification", () => {
    it("should display the clickable categories buttons", () => {
        render(<Select selection={["Category1", "Category2"]} />);
        expect(screen.getByTestId("collapse-button-testid")).toBeInTheDocument();
    });
});