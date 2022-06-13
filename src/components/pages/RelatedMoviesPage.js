import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_SIMILAR_MOVIE_DETAILS_BY_ID} from "../../graphQL/Queries";
import {ErrorMessage, LoadingMessage, MainContentWrapper} from "../../styles/PageContainerStyledWrapper";

import SearchResultContainer from "../SearchResultContainer";
import {Backdrop, CircularProgress} from "@mui/material";
import RelatedMovieCard from "../CardComponents/RelatedMovieCard";
import {ResultContainer} from "../../styles/SearchPage.Styled";

const RelatedMoviesPage = (props) => {

    const relatedMovieId = props.match.params.id;

    const {data, loading, error} = useQuery(GET_SIMILAR_MOVIE_DETAILS_BY_ID, {
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
            <ResultContainer data-testid="result_div">
                {data && <SearchResultContainer movies={data.movie.similar}/>}
            </ResultContainer>
        </MainContentWrapper>
    );
};

export default RelatedMoviesPage;
