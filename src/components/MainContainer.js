import React, {useEffect, useState} from 'react';
import {Box, Button, Popper, TextField} from "@mui/material";
import {dataHandler} from "../services/Data_handler";
import {ErrorMessage, MainContentWrapper} from "../styles/PageContainer.Style";
import {ResultContainer, SearchContainer, TitleContainer} from "../styles/SearchPage.Styled";
import MovieCard from "./MovieCard";


const MainContainer = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [searchValue, setSearchValue] = useState();
    const [movieResults, setMovieResults] = useState({
        data: {
            searchMovies: []
        }
    });

    const BASEURL = 'https://tmdb.sandbox.zoosh.ie/dev/graphql'

    function handleKeyPress(event) {
        let key = event.keyCode || event.which;
        if (key === 13) {  //KeyCode for Enter
            handleSearchRequest();
        }
    }

    function handleSearchRequest(event) {
        if (searchValue) {
            setLoading(true)
            dataHandler._data = {
                "query": "query SearchMovies { searchMovies(query: \"" + searchValue + "\") { id " +
                    "name " +
                    "overview " +
                    "releaseDate " +
                    "img: poster {" +
                    "url: custom(size: \"w185_and_h278_bestv2\")} " +
                    "genres{ ... on Genre {name} } } }"
            }
            dataHandler._api_post(BASEURL,
                dataHandler._data,
                setMovieResults,
                setError,
                setLoading)
        } else {
        }
    }

    if (loading) {
        return (
            <MainContentWrapper>
                <p>Data is loading...</p>
            </MainContentWrapper>);
    }

    if (error) {
        return (
            <MainContentWrapper>
                <ErrorMessage>An error occurred while fetching information!</ErrorMessage>
            </MainContentWrapper>
        );
    }

    return (
        <MainContentWrapper>
            <TitleContainer>
                <h1>Welcome</h1>
                <h3>Search for a movie</h3>
            </TitleContainer>
            <SearchContainer>

                <TextField fullWidth id="contained"
                           label="Search Movie"
                           variant="filled"
                           onChange={(event) => setSearchValue(event.target.value)}
                           onKeyPress={(event) => handleKeyPress(event)}
                />

                <Popper id={id} open={open} anchorEl={anchorEl} placement="right">
                    <Box sx={{border: 1, p: 1, m: 2}}>
                        Please fill the search area!
                    </Box>
                </Popper>

                <Button onClick={handleSearchRequest} variant="contained">Search</Button>
            </SearchContainer>
            <ResultContainer>
                {movieResults.data.searchMovies.map(movie =>
                    <MovieCard key={movie.id} movie={movie}/>
                )}
            </ResultContainer>
        </MainContentWrapper>
    );
};

export default MainContainer;
