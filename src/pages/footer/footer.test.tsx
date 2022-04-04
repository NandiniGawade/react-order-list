import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { Footer } from "./footer";

let container: any = null;
beforeEach(() => {
    
    container = document.createElement("div");
    document.body.appendChild(container);
    render(
        <MemoryRouter>
          <Footer/>
        </MemoryRouter>
      , container);
});

it('should have footer page', () => {
    expect(container.getElementsByClassName("footer")).toBeTruthy();
});

it('should have Timeslots button', () => {
    const linkElement = screen.getByText("Timeslots");
    expect(linkElement).toBeInTheDocument();
});

it('should have My Deliveries button', () => {
    const linkElement = screen.getByText("My Deliveries");
    expect(linkElement).toBeInTheDocument();
});

it('should have Supports button', () => {
    const linkElement = screen.getByText("Supports");
    expect(linkElement).toBeInTheDocument();
});

it('should have Settings button', () => {
    const linkElement = screen.getByText("Settings");
    expect(linkElement).toBeInTheDocument();
});