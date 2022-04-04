import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Orders from "./orders";

let container: any = null;
beforeEach(() => {
    
    container = document.createElement("div");
    document.body.appendChild(container);
    render(
        <MemoryRouter>
          <Orders/>
        </MemoryRouter>
      , container);
});

it('should have orders container', () => {
    expect(container.getElementsByClassName("list-panel")).toBeTruthy();
});

it('should have header component', () => {
    const linkElement = screen.getByText(/My Orders/i);
    expect(linkElement).toBeInTheDocument();
});

it('should have footer component', () => {
    const linkElement = screen.getByTestId("footer_id");
    expect(linkElement).toBeInTheDocument();
});