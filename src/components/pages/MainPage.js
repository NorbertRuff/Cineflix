import React, {useEffect, useState} from 'react';
import {MainContentWrapper} from "../../styles/PageContainerStyledWrapper";
import SearchComponent from "../SearchComponent";
import ApolloKeywordMovieSearch from "../ApolloKeywordMovieSearch";
import ApolloRelatedMovieSearch from "../ApolloRelatedMovieSearch";
import {ResultContainer} from "../../styles/SearchPage.Styled";
import RelatedMovieCard from "../CardComponents/RelatedMovieCard";

const MainPage = () => {

    const [searchKeyword, setSearchKeyword] = useState();
    const [relatedMovie, setRelatedMovie] = useState();


    useEffect(() => {

    }, [relatedMovie]);


    if (relatedMovie) {
        return (
            <MainContentWrapper>
                <SearchComponent setRelatedMovie={setRelatedMovie} setSearchKeyword={setSearchKeyword}/>
                <h1>Movies related to: {relatedMovie.name}</h1>
                <RelatedMovieCard movie={relatedMovie}/>
                <ResultContainer data-testid="result_div">
                    {relatedMovie ? <ApolloRelatedMovieSearch relatedMovie={relatedMovie}
                                                              setRelatedMovie={setRelatedMovie}/> : ""}
                </ResultContainer>
            </MainContentWrapper>);
    }

    return (
        <MainContentWrapper>
            <SearchComponent setRelatedMovie={setRelatedMovie} setSearchKeyword={setSearchKeyword}/>
            {searchKeyword ?
                <ResultContainer data-testid="result_div">
                    <ApolloKeywordMovieSearch searchKeyword={searchKeyword}
                                              setRelatedMovie={setRelatedMovie}/>
                </ResultContainer> : ""}
        </MainContentWrapper>
    );
};

export default MainPage;