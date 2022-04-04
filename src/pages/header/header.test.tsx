import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './header';

let container: any = null;
beforeEach(() => {
    
    container = document.createElement("div");
    document.body.appendChild(container);
    render(
        <MemoryRouter>
          <Header  headerTitle="My Orders"/>
        </MemoryRouter>
      , container);
});

it('should have My Orders title', () => {
    const linkElement = screen.getByText(/My Orders/i);
    expect(linkElement).toBeInTheDocument();
})

it('should have sign out button', () => {
    expect(container.getElementsByClassName("signOut")).toBeTruthy();
})
