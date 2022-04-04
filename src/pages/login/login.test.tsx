import { render, screen } from "@testing-library/react";
import { Login } from "./login";
import { MemoryRouter } from 'react-router-dom';

let container: any = null;
beforeEach(() => {
    
    container = document.createElement("div");
    document.body.appendChild(container);
    render(
        <MemoryRouter>
          <Login/>
        </MemoryRouter>
      , container);
});

it('should have login page', () => {
    expect(container.getElementsByClassName("login-page")).toBeTruthy();
});

it('should have email address as text field', () => {
    const linkElement = screen.getByPlaceholderText(/Email Address/i);
    expect(linkElement).toBeInTheDocument();
})

it('should have password as text field', () => {
    const linkElement = screen.getByPlaceholderText(/Password/i);
    expect(linkElement).toBeInTheDocument();
})

it('should have login button', () => {
    const linkElement = screen.getByText("Login");
    expect(linkElement).toBeInTheDocument();
})

