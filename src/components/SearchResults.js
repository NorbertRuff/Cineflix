import React from 'react';
import {ResultContainer} from "../styles/SearchPage.Styled";
import {Link} from "react-router-dom";
import MovieCard from "./CardComponents/MovieCard";
import {Box, Button} from "@mui/material";

const SearchResults = ({movies, handleSearchForRelatedMovies, setRelatedMovie}) => {
    return (
        <ResultContainer data-testid="result_div">
            {movies && (
                movies.map(movie =>
                        <Box className="card-element" key={movie.id} sx={{display: "flex", flexDirection: "column"}}>
                            <Link to={`/movie/${movie.id}`}>
                                <MovieCard movie={movie}/>
                            </Link>
                            <Button className="related-button" variant="contained" color="secondary" sx={{m: 1}}
                                    onClick={() => {
                                        setRelatedMovie(movie);
                                        handleSearchForRelatedMovies(movie.id)
                                    }}>Find related Movies
                            </Button>
                        </Box>
                    ))}
        </ResultContainer>
    );
};

export default SearchResults;
