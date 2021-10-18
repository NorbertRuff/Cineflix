import React from 'react';
import {ErrorMessage, LoadingMessage, MainContentWrapper} from "../styles/PageContainer.Style";
import {useQuery} from "@apollo/client";
import {GET_MOVIE_DETAILS_BY_ID} from "../graphQL/Queries";
import {Backdrop, Box, Button, Card, CardContent, CircularProgress} from "@mui/material";
import MovieHeader from "./CardComponents/MovieHeader";
import MovieCast from "./CardComponents/MovieCast";
import MovieCrew from "./CardComponents/MovieCrew";
import MovieOverView from "./CardComponents/MovieOverView";
import MovieThumbnail from "./CardComponents/MovieThumbnail";
import {MovieDetailsWrapper} from "../styles/MovieDetails.Styled";
import WikiMiniCard from "./CardComponents/WikiMiniCard";
import ImdbMiniCard from "./CardComponents/ImdbMiniCard";
import {Link} from "react-router-dom";


const MovieDetails = (props) => {
    const movieId = props.match.params.id;

    const {data, loading, error} = useQuery(GET_MOVIE_DETAILS_BY_ID, {
        variables: {ID: movieId},
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
                        <WikiMiniCard MovieInfo={data.movie.name}/>
                    </Card>
                    <Card className="imdbCard" sx={{marginBottom: 2}}>
                        <ImdbMiniCard MovieInfo={data.movie.name}/>
                    </Card>
                    <Card className="relatedLink" sx={{p: 2}}>
                        <Link to={`/related/${data.movie.id}`}> ><Button>Find Similar movies</Button></Link>
                    </Card>
                </Box>
            </MovieDetailsWrapper>
        </MainContentWrapper>
    );
};

export default MovieDetails;
