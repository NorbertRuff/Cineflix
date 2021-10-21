import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_SIMILAR_MOVIE_DETAILS_BY_ID} from "../graphQL/Queries";
import {ErrorMessage, LoadingMessage} from "../styles/PageContainer.Style";
import {Backdrop, CircularProgress} from "@mui/material";
import SearchResultContainer from "./SearchResultContainer";

const ApolloRelatedMovieSearch = ({setRelatedMovie, relatedMovie}) => {


    const {loading, data, error} = useQuery(GET_SIMILAR_MOVIE_DETAILS_BY_ID, {
        variables: {ID: relatedMovie.id},
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
            </>);
    }

    if (error) {
        return (
            <ErrorMessage>An error occurred while fetching information!</ErrorMessage>
        );
    }
    if (data) {
        return (
            <SearchResultContainer setRelatedMovie={setRelatedMovie} movies={data.movie.similar}/>
        );
    }
};

export default ApolloRelatedMovieSearch;
