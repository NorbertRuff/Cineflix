import React, {useState} from 'react';
import {Backdrop, Box, Button, CircularProgress, Popper, TextField} from "@mui/material";
import {ErrorMessage, LoadingMessage, MainContentWrapper} from "../styles/PageContainer.Style";
import {ResultContainer, SearchContainer, TitleContainer} from "../styles/SearchPage.Styled";
import MovieCard from "./MovieCard";
import {useLazyQuery} from '@apollo/client';
import {GET_MOVIES} from "../graphQL/Queries";

const MainContainer = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const [searchValue, setSearchValue] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");

    const [getMovies, {loading, data, error}] = useLazyQuery(GET_MOVIES, {
        variables: {keyWord: searchKeyword},
        onCompleted: data => {
            console.log('data ', data);
        }
    });

    function handleKeyPress(event) {
        let key = event.keyCode || event.which;
        if (key === 13) {  //KeyCode for Enter
            handleSearchRequest();
        }
    }

    function handleSearchRequest(event) {
        if (searchValue) {
            setSearchKeyword(searchValue);
            getMovies();
        } else {
            setAnchorEl(anchorEl ? null : event.currentTarget);
        }
    }

    if (loading) {
        return (
            <MainContentWrapper>
                <LoadingMessage>Data is loading...</LoadingMessage>
                <Backdrop sx={{color: 'var(--clr-primary-200)', zIndex: (theme) => theme.zIndex.drawer + 1}}
                          open={loading}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
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
                {data && (data.searchMovies.map(movie =>
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </ResultContainer>
        </MainContentWrapper>
    );
};

export default MainContainer;
