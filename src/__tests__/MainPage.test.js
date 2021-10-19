import React from 'react';
import {render, screen} from '@testing-library/react';
import App from "../App";


beforeEach(() => {
    render(<App/>)
});

describe('Navbar test', () => {
    it('renders navbar', () => {
        const navbar = screen.getByRole('header');
        expect(navbar).toBeInTheDocument();
    });

    it('renders title in navbar', () => {
        const title = screen.getByText(/Apex Homework/i);
        const span = screen.getByText(/Lab/i);
        expect(title).toBeInTheDocument();
        expect(span).toBeInTheDocument();
    });

    it('renders a link with correct attribute in navbar', () => {
        const link = screen.getByTestId('homeLink');
        expect(link).toHaveAttribute("href", "/")

    });
});

describe('footer test', () => {
    it('renders footer', () => {
        const footer = screen.getByRole('footer');
        expect(footer).toBeInTheDocument();
    });

    it('renders with correct text in footer', () => {
        const name = screen.getByText(/Ruff Norbert/i);
        expect(name.textContent).toBe("Created by Ruff Norbert");
    });
});

describe('Github corner test', () => {
    it('renders Github corner', () => {
        const githubCorner = screen.getByLabelText(/Open github project/i);
        expect(githubCorner).toBeInTheDocument();
    });

    test('Github corner has correct link', () => {
        const githubCorner = screen.getByLabelText(/Open github project/i);
        expect(githubCorner).toHaveAttribute('href', 'https://github.com/NorbertRuff/apex-project');
    })
});

describe('search Component test', () => {
    it('renders main title', () => {
        const title = screen.getByText(/Movie finder/i);
        expect(title).toBeInTheDocument();
    });

    it('renders sub title', () => {
        const subTitle = screen.getByText(/Search for a movie/i);
        expect(subTitle.textContent).toBe("Search for a movie");

    });

    it('renders a searchbar', () => {
        const searchbar = screen.getByRole("textbox");
        expect(searchbar).toBeInTheDocument();
    });

    it('renders a searchbar with correct label', () => {
        const searchbar = screen.getByLabelText(/Movie Title/i);
        expect(searchbar).toBeInTheDocument();
    });
    it('renders a search button', () => {
        const searchButton = screen.getByRole('button');
        expect(searchButton).toBeInTheDocument();
    });

    test('search button has correct text', () => {
        const searchButton = screen.getByRole('button');
        expect(searchButton).toHaveTextContent(/Search/i);
    });
});

