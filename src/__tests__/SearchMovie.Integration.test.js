import React from "react";
import {SEARCH_MOVIES_BY_KEYWORD} from "../graphQL/Queries";

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
                            "__typename": "Poster"
                        },
                        "genres": [
                            {
                                "name": "Drama",
                                "__typename": "Genre"
                            }
                        ],
                        "__typename": "Movie"
                    },
                    {
                        "id": "345922",
                        "name": "Fist Fight",
                        "overview": "When one school teacher gets the other fired, he is challenged to an after-school fight.",
                        "score": 6.1,
                        "releaseDate": "2017-02-16T00:00:00.000Z",
                        "img": {
                            "medium": "https://image.tmdb.org/t/p/w342/huRhv4IZDk2ds0DIDkI6uxdmb6J.jpg",
                            "__typename": "Poster"
                        },
                        "genres": [
                            {
                                "name": "Comedy",
                                "__typename": "Genre"
                            }
                        ],
                        "__typename": "Movie"
                    }
                ]
            }
        },
    },
];

//
// const MockedApp = () => {
//     return (
//         <MockedProvider mocks={mocks}>
//             <BrowserRouter>
//                 <SearchComponent getMoviesByKeyword={getMoviesByKeywordMock}
//                                  setSearchKeyword={mockedSetKeywordMock}/>
//
//             </BrowserRouter>
//         </MockedProvider>
//     )
// }
//
describe('Search movie tests', () => {
    it('renders', async () => {
//         render(<MockedApp/>);
//         const inputElement = screen.getByRole('textbox');
//         const searchButtonElement = screen.getByRole("button", {name: /search/i});
//         act(() => {
//             fireEvent.change(inputElement, {target: {value: "Fight Club"}});
//             fireEvent.click(searchButtonElement);
//         });


        // it('renders without error', () => {
        //     const component = TestRenderer.create(
        //         <MockedProvider mocks={mocks}>
        //             <BrowserRouter>
        //                 <MainPage>
        //                     <SearchComponent getMoviesByKeyword={"Fight Club"} setSearchKeyword={"Fight Club"}/>
        //                     <SearchResults/>
        //                 </MainPage>
        //
        //             </BrowserRouter>
        //         </MockedProvider>
        //     );
        //
        //     const tree = component.toJSON();
        //     expect(tree.children).toContain('Fight Club');
        // });
//
    });
});

