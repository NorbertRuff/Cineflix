import React from 'react';
import {useQuery} from "@apollo/client";
import {SEARCH_MOVIES_BY_KEYWORD} from "../graphQL/Queries";
import {Backdrop, CircularProgress} from "@mui/material";

import SearchResultContainer from "./SearchResultContainer";
import {ErrorMessage, LoadingMessage} from "../styles/PageContainerStyledWrapper";

const ApolloKeywordMovieSearch = ({searchKeyword, setRelatedMovie}) => {
    /*<------------------Apollo search movie by keyword-------------------->*/
    const {loading, data, error} = useQuery(SEARCH_MOVIES_BY_KEYWORD, {
        variables: {keyWord: searchKeyword},
        onCompleted: data => {
            // console.log(data)
            setRelatedMovie()
        }
    });


    if (loading) {
        return (
            <>
                <LoadingMessage>Results are loading...</LoadingMessage>
                <Backdrop sx={{color: 'var(--clr-primary-200)', zIndex: (theme) => theme.zIndex.drawer + 1}}
                          open={loading}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </>)
    }

    if (error) {
        return (
            <ErrorMessage>An error occurred while fetching information! {error.message}</ErrorMessage>
        );
    }

    if (data.searchMovies.length === 0) {
        return (
            <ErrorMessage>Sorry no result</ErrorMessage>
        );
    }

    if (data.searchMovies) {
        return (
            <SearchResultContainer setRelatedMovie={setRelatedMovie} movies={data.searchMovies}/>
        );
    }

};

export default ApolloKeywordMovieSearch;
