import React, {useState} from 'react';
import {MainContentWrapper} from "../../styles/PageContainerStyledWrapper";
import SearchComponent from "../SearchComponent";
import ApolloKeywordMovieSearch from "../ApolloKeywordMovieSearch";
import ApolloRelatedMovieSearch from "../ApolloRelatedMovieSearch";
import {ResultContainer} from "../../styles/SearchPage.Styled";
import RelatedMovieCard from "../CardComponents/RelatedMovieCard";

const MainPage = () => {
    /*<------------------Keyword hook-------------------->*/
    const [searchKeyword, setSearchKeyword] = useState();


    /*<-------------Related Movie hook---------------->*/
    const [relatedMovie, setRelatedMovie] = useState();


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