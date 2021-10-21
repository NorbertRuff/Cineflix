import React from "react";
import {MockedProvider} from '@apollo/client/testing';
import SearchComponent from "../components/SearchComponent";
import {SEARCH_MOVIES_BY_KEYWORD} from "../graphQL/Queries";
import TestRenderer from 'react-test-renderer';
import MainPage from "../components/pages/MainPage";
import App from "../App";

const mocks = [
    {
        request: {
            query: SEARCH_MOVIES_BY_KEYWORD,
            variables: {
                keyWord: "Fight Club",
            },
        },
        result: {
            "data": {
                "searchMovies": [
                    {
                        "id": "550",
                        "name": "Fight Club",
                        "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
                        "score": 8.4,
                        "releaseDate": "1999-10-15T00:00:00.000Z",
                        "img": {
                            "medium": "https://image.tmdb.org/t/p/w342/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
                        },
                        "genres": [
                            {
                                "name": "Drama",
                                "__typename": "Genre"
                            }
                        ],
                    },
                    {
                        "id": "345922",
                        "name": "Fist Fight",
                        "overview": "When one school teacher gets the other fired, he is challenged to an after-school fight.",
                        "score": 6.1,
                        "releaseDate": "2017-02-16T00:00:00.000Z",
                        "img": {
                            "medium": "https://image.tmdb.org/t/p/w342/huRhv4IZDk2ds0DIDkI6uxdmb6J.jpg",
                        },
                        "genres": [
                            {
                                "name": "Comedy",
                                "__typename": "Genre"
                            }
                        ],
                    }
                ]
            }
        },
    },
];

describe('Search movie tests', () => {
    it('renders', async () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <App>
                    <MainPage>
                        <SearchComponent>

                        </SearchComponent>
                    </MainPage>
                </App>
            </MockedProvider>,
        );
        // const inputElement = screen.getByTestId('searchbar');
        // const searchButtonElement = screen.getByRole("button", {name: /search/i});
        // act(() => {
        //     fireEvent.change(inputElement, {target: {value: "Fight Club"}});
        //     fireEvent.click(searchButtonElement);
        // });
        const tree = component.toJSON();
        console.log(tree)
        // expect(tree.children).toContain('Loading...');
    });
});

// it('renders without error', () => {
//     const component = TestRenderer.create(
//         <MockedProvider mocks={mocks}>
//             <BrowserRouter>
//                 <MainPage>
//                     <SearchComponent getMoviesByKeyword={"Fight Club"} setSearchKeyword={"Fight Club"}/>
//                     <SearchResultContainer/>
//                 </MainPage>
//
//             </BrowserRouter>
//         </MockedProvider>
//     );
//
//     const tree = component.toJSON();
//     expect(tree.children).toContain('Fight Club');
// });




