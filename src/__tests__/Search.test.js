import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import SearchComponent from "../components/SearchComponent";

const getMoviesByKeyword = jest.fn()
const mockedSetKeyword = jest.fn()


describe('input tests', () => {
    it('renders', () => {
        render(<SearchComponent
            getMoviesByKeyword={getMoviesByKeyword}
            setSearchKeyword={mockedSetKeyword}
        />);
        const inputElement = screen.getByTestId('searchbar');
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type into', () => {
        render(<SearchComponent
            getMoviesByKeyword={getMoviesByKeyword}
            setSearchKeyword={mockedSetKeyword}
        />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, {target: {value: "Fight Club"}})
        expect(inputElement.value).toBe("Fight Club");
    });

    it('should have empty input when button clicked', () => {
        render(<SearchComponent
            getMoviesByKeyword={getMoviesByKeyword}
            setSearchKeyword={mockedSetKeyword}
        />);
        const inputElement = screen.getByRole('textbox');
        const searchButtonElement = screen.getByRole("button", {name: /search/i});
        fireEvent.change(inputElement, {target: {value: "Fight Club"}})
        fireEvent.click(searchButtonElement)
        expect(inputElement.value).toBe("");
    });
});