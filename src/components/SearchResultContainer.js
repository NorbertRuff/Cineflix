import React from 'react';
import {ResultContainer} from "../styles/SearchPage.Styled";
import {Link} from "react-router-dom";
import MiniMovieCard from "./MiniMovieCard";
import {Box, Button} from "@mui/material";

const SearchResultContainer = ({movies, handleSearchRelatedMovies, setRelatedMovie}) => {
    return (
        <ResultContainer>
            {movies && (
                movies.length === 0 ? <h1>No result</h1> :
                    movies.map(movie =>
                        <Box key={movie.id} sx={{display: "flex", flexDirection: "column"}}>
                            <Link to={`/movie/${movie.id}`}>
                                <MiniMovieCard movie={movie}/>
                            </Link>
                            <Button variant="contained" color="secondary" sx={{m: 1}} onClick={() => {
                                setRelatedMovie(movie);
                                handleSearchRelatedMovies(movie.id)
                            }}>Find related Movies
                            </Button>
                        </Box>
                    ))}
        </ResultContainer>
    );
};

export default SearchResultContainer;
