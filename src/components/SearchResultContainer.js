import React from 'react';
import {ResultContainer} from "../styles/SearchPage.Styled";
import {Link} from "react-router-dom";
import WrapperMovieCard from "./CardComponents/Wrapper.MovieCard";
import {Box, Button} from "@mui/material";

const SearchResultContainer = ({movies, handleSearchRelatedMovies, setRelatedMovie}) => {
    return (
        <ResultContainer data-testid="result_div">
            {movies && (
                    movies.map(movie =>
                        <Box key={movie.id} sx={{display: "flex", flexDirection: "column"}}>
                            <Link to={`/movie/${movie.id}`}>
                                <WrapperMovieCard movie={movie}/>
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
