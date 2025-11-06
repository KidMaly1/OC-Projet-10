import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created",() => {
  it("a list of events is displayed", async () => {
    render(<Home />);
    await screen.findAllByText("Nos réalisations");
    const eventCards = screen.getAllByTestId("card-testid");
    expect(eventCards.length).toBeGreaterThan(0); 
  })
  it("a list of people is displayed", async () => {
    render(<Home />);
    const firstPerson = await screen.getByText("Samira");
    expect(firstPerson).toBeInTheDocument();
  })
  it("a footer is displayed", async () => {
    render(<Home />);
    const footerDisplay = await screen.getByRole("contentinfo");
    expect(footerDisplay).toBeInTheDocument();
  })
  it("an event card, with the last event, is displayed", async () => {
    render(<Home />);
    const lastEventSection = await screen.getByText("Notre dernière prestation");
    expect(lastEventSection).toBeInTheDocument();
  })
});
