import React, {useState} from 'react';
import {Backdrop, CircularProgress} from "@mui/material";
import {ErrorMessage, LoadingMessage, MainContentWrapper} from "../styles/PageContainer.Style";
import {useLazyQuery} from '@apollo/client';
import {GET_MOVIES} from "../graphQL/Queries";
import SearchComponent from "./SearchComponent";
import MovieResultCardComponent from "./CardComponents/MovieResultComponent";

const MainPage = () => {

    const [searchKeyword, setSearchKeyword] = useState("");

    const [getMovies, {loading, data, error}] = useLazyQuery(GET_MOVIES, {
        variables: {keyWord: searchKeyword},
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
            <SearchComponent getMovies={getMovies} setSearchKeyword={setSearchKeyword}/>
            {data && <MovieResultCardComponent movies={data.searchMovies}/>}
        </MainContentWrapper>
    );
};

export default MainPage;
