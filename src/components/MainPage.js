import React, {useState} from 'react';
import {Backdrop, CircularProgress} from "@mui/material";
import {ErrorMessage, LoadingMessage, MainContentWrapper} from "../styles/PageContainer.Style";
import {useLazyQuery} from '@apollo/client';
import {GET_SIMILAR_MOVIE_DETAILS_BY_ID, SEARCH_MOVIES_BY_KEYWORD} from "../graphQL/Queries";
import SearchComponent from "./SearchComponent";
import MovieResultCardComponent from "./CardComponents/MovieResultComponent";
import RelatedMovieCard from "./RelatedMovieCard";

const MainPage = () => {

    const [searchKeyword, setSearchKeyword] = useState("");
    const [movies, setMovies] = useState();
    const [relatedId, setRelatedId] = useState("");
    const [relatedMovie, setRelatedMovie] = useState("");

    const handleSearchRelatedMovies = (id) => {
        setRelatedId(id);
        getRelatedMovies();
    };

    const [getMovies, {loading, data, error}] = useLazyQuery(SEARCH_MOVIES_BY_KEYWORD, {
        variables: {keyWord: searchKeyword},
        onCompleted: data => {
            setMovies(data.searchMovies)
            // console.log('data ', data);
        }
    });


    const [getRelatedMovies, {
        loading: relatedMoviesLoading,
        error: relatedMoviesError
    }] = useLazyQuery(GET_SIMILAR_MOVIE_DETAILS_BY_ID, {
        variables: {ID: relatedId},
        onCompleted: data => {
            setMovies(data.movie.similar)
            // console.log('data ', data);
        }
    });

    if (loading || relatedMoviesLoading) {
        return (
            <MainContentWrapper>
                <LoadingMessage>Data is loading...</LoadingMessage>
                <Backdrop sx={{color: 'var(--clr-primary-200)', zIndex: (theme) => theme.zIndex.drawer + 1}}
                          open={loading || relatedMoviesLoading}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </MainContentWrapper>);
    }

    if (error || relatedMoviesError) {
        return (
            <MainContentWrapper>
                <ErrorMessage>An error occurred while fetching information!</ErrorMessage>
            </MainContentWrapper>
        );
    }

    return (
        <MainContentWrapper>
            <SearchComponent getMovies={getMovies} setSearchKeyword={setSearchKeyword}/>
            {relatedId ?
                <>
                    <h1>Movies related to: {relatedMovie.name}</h1>
                    <RelatedMovieCard movie={relatedMovie}/>
                </>
                : ""}
            {data && <MovieResultCardComponent handleSearchRelatedMovies={handleSearchRelatedMovies}
                                               setRelatedMovie={setRelatedMovie} movies={movies}/>}
        </MainContentWrapper>
    );
};

export default MainPage;
