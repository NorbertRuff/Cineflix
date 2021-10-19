import React from 'react';
import {ErrorMessage, LoadingMessage, MainContentWrapper} from "../../styles/PageContainer.Style";
import {useQuery} from "@apollo/client";
import {GET_MOVIE_DETAILS_BY_ID} from "../../graphQL/Queries";
import {Backdrop, Box, Button, Card, CardContent, CircularProgress} from "@mui/material";
import CardTitleMovieCard from "../CardComponents/CardTitle.MovieCard";
import CastListMovieCard from "../CardComponents/CastList.MovieCard";
import CardCrewListMovieCard from "../CardComponents/CardCrewList.MovieCard";
import OverviewMovieCard from "../CardComponents/Overview.MovieCard";
import ThumbnailMovieCard from "../CardComponents/Thumbnail.MovieCard";
import {ContentWrapper, MovieDetailsWrapper, PersonContainer} from "../../styles/MovieDetails.Styled";
import WikiMiniCardMovieCard from "../CardComponents/WikiMiniCard.MovieCard";
import ImdbMiniCardMovieCard from "../CardComponents/ImdbMiniCard.MovieCard";
import {Link} from "react-router-dom";


const MovieDetailsPage = (props) => {
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
                      sx={{maxWidth: 1200, backgroundColor: "rgba(255,255,255,0.8)"}}>
                    <CardTitleMovieCard movie={data.movie}/>
                    <ContentWrapper>
                        <ThumbnailMovieCard movie={data.movie}/>
                        <CardContent sx={{minWidth: 200}}>
                            <OverviewMovieCard overview={data.movie.overview}/>
                            <PersonContainer>
                                <CastListMovieCard cast={data.movie.cast}/>
                                <CardCrewListMovieCard crew={data.movie.crew}/>
                            </PersonContainer>
                        </CardContent>
                    </ContentWrapper>

                </Card>
                <Box sx={{maxWidth: 400, display: "flex", flexDirection: "column"}}>
                    <Card className="wikiCard" sx={{marginBottom: 2}}>
                        <WikiMiniCardMovieCard MovieInfo={data.movie.name}/>
                    </Card>
                    <Card className="imdbCard" sx={{marginBottom: 2}}>
                        <ImdbMiniCardMovieCard MovieInfo={data.movie.name}/>
                    </Card>
                    <Card className="relatedLink" sx={{p: 2}}>
                        <Link to={`/related/${data.movie.id}`}> ><Button>Find Similar movies</Button></Link>
                    </Card>
                </Box>
            </MovieDetailsWrapper>
        </MainContentWrapper>
    );
};

export default MovieDetailsPage;
