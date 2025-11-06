import { render, screen } from "@testing-library/react";
import Field from ".";

describe("Label verification", () => {
    it("a label name should be displayed", () => {
        render(<Field label="Nom" />);
        expect(screen.getByText("Nom")).toBeInTheDocument();
});
});