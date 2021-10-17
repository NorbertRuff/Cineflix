import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_SIMILAR_MOVIE_DETAILS} from "../graphQL/Queries";
import {ErrorMessage, LoadingMessage, MainContentWrapper} from "../styles/PageContainer.Style";

import MovieResultCardComponent from "./CardComponents/MovieResultComponent";
import {Backdrop, CircularProgress} from "@mui/material";
import RelatedMovieCard from "./RelatedMovieCard";

const RelatedMovies = (props) => {

    const relatedMovieId = props.match.params.id;

    const {data, loading, error} = useQuery(GET_SIMILAR_MOVIE_DETAILS, {
        variables: {ID: relatedMovieId},
        onCompleted: data => {
            // console.log('data ', data);
        }
    });

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
            <h1>Movies related to:</h1>
            <RelatedMovieCard movie={data.movie}/>
            {data && <MovieResultCardComponent movies={data.movie.similar}/>}
        </MainContentWrapper>
    );
};

export default RelatedMovies;
