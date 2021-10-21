import React, {useState} from 'react';
import {MainContentWrapper} from "../../styles/PageContainer.Style";
import SearchComponent from "../SearchComponent";
import ApolloMovieSearch from "../ApolloMovieSearch";
import ApolloRelatedMovieSearch from "../ApolloRelatedMovieSearch";
import {ResultContainer} from "../../styles/SearchPage.Styled";
import RelatedMovieCard from "../RelatedMovieCard";

const MainPage = () => {

    const [searchKeyword, setSearchKeyword] = useState();
    const [relatedMovie, setRelatedMovie] = useState();


    if (relatedMovie) {
        return (
            <MainContentWrapper>
                <SearchComponent setSearchKeyword={setSearchKeyword}/>
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
            <SearchComponent setSearchKeyword={setSearchKeyword}/>
            <ResultContainer data-testid="result_div">
                {searchKeyword ? <ApolloMovieSearch searchKeyword={searchKeyword}
                                                    setRelatedMovie={setRelatedMovie}/> : ""}
            </ResultContainer>
        </MainContentWrapper>
    );
};

export default MainPage;
