import React, {useState} from 'react';

import {ErrorMessage, MainContentWrapper} from "../styles/PageContainer.Style";


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

        </MainContentWrapper>
    );
};

export default MainContainer;
