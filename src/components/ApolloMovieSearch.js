import React from 'react';
import {useQuery} from "@apollo/client";
import {SEARCH_MOVIES_BY_KEYWORD} from "../graphQL/Queries";
import {ErrorMessage, LoadingMessage} from "../styles/PageContainer.Style";
import {Backdrop, CircularProgress} from "@mui/material";

import SearchResultContainer from "./SearchResultContainer";

const ApolloMovieSearch = ({searchKeyword, setRelatedMovie}) => {

    const {loading, data, error} = useQuery(SEARCH_MOVIES_BY_KEYWORD, {
        variables: {keyWord: searchKeyword},
        onCompleted: data => {
            console.log('data ', data);
        }
    });


    if (loading) {
        return (
            <>
                <LoadingMessage>Data is loading...</LoadingMessage>
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

    if (data) {
        return (

            <SearchResultContainer setRelatedMovie={setRelatedMovie} movies={data.searchMovies}/>
        );
    }
};

export default ApolloMovieSearch;
