import React, {useState} from 'react';
import {ErrorMessage, LoadingMessage, MainContentWrapper} from "../styles/PageContainer.Style";
import {useQuery} from "@apollo/client";
import {GET_MOVIE_DETAILS} from "../graphQL/Queries";
import {Backdrop, Box, Card, CardContent, CircularProgress} from "@mui/material";
import MovieHeader from "./CardComponents/MovieHeader";
import MovieCast from "./CardComponents/MovieCast";
import MovieCrew from "./CardComponents/MovieCrew";
import MovieOverView from "./CardComponents/MovieOverView";
import MovieThumbnail from "./CardComponents/MovieThumbnail";
import {dataHandler} from "../services/dataHandler";
import {MovieDetailsWrapper} from "../styles/MovieDetails.Styled";
import WikiInfoCard from "./WikiInfoCard";
import ImdbInfoCard from "./ImdbdInfoCard";

const MovieDetails = (props) => {
    const movieId = props.match.params.id;

    function fetchWikiInfo(name) {
        const baseUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srlimit=1&srsearch=${name}&srnamespace=0&srprop=snippet`;
        dataHandler._api_get(baseUrl, setWikiInfo, setWikiError, setWikiLoading)
    }

    function fetchImdbInfo(name) {
        const baseUrl = `https://imdb-api.com/en/API/SearchMovie/k_13fjgtth/${name.toString()}`;
        dataHandler._api_get(baseUrl, setImdbInfo, setImdbError, setImdbLoading)
    }

    const {data, loading, error} = useQuery(GET_MOVIE_DETAILS, {
        variables: {ID: movieId},
        onCompleted: data => {
            console.log('data ', data);
            fetchWikiInfo(data.movie.name)
            fetchImdbInfo(data.movie.name)
        }
    });

    const [wikiInfo, setWikiInfo] = useState("");
    const [wikiLoading, setWikiLoading] = useState(false);
    const [wikiError, setWikiError] = useState(false);

    const [imdbInfo, setImdbInfo] = useState("");
    const [imdbLoading, setImdbLoading] = useState(false);
    const [imdbError, setImdbError] = useState(false);

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
        <MainContentWrapper backDrop={data.movie.backdrop !== null ? data.movie.backdrop.large : undefined}>
            <MovieDetailsWrapper>
                <Card className="mainCard"
                      sx={{maxHeight: 800, maxWidth: 1200, backgroundColor: "rgba(255,255,255,0.8)"}}>
                    <MovieHeader movie={data.movie}/>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <MovieThumbnail movie={data.movie}/>
                        <CardContent>
                            <MovieOverView overview={data.movie.overview}/>
                            <Box sx={{display: "flex", justifyContent: "space-evenly"}}>
                                <MovieCast cast={data.movie.cast}/>
                                <MovieCrew crew={data.movie.crew}/>
                            </Box>
                        </CardContent>
                    </Box>

                </Card>
                <Box sx={{maxWidth: 400, display: "flex", flexDirection: "column"}}>
                    <Card className="wikiCard" sx={{marginBottom: 2}}>
                        <WikiInfoCard wikiInfo={wikiInfo} wikiLoading={wikiLoading} wikiError={wikiError}/>
                    </Card>
                    <Card className="imdbCard" sx={{marginBottom: 2}}>
                        <ImdbInfoCard imdbInfo={imdbInfo} imdbLoading={imdbLoading} imdbError={imdbError}/>
                    </Card>
                </Box>
            </MovieDetailsWrapper>
        </MainContentWrapper>
    );
};

export default MovieDetails;
