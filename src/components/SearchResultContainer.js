import React from 'react';
import {Link} from "react-router-dom";
import {Box, Button} from "@mui/material";
import MovieCard from "./CardComponents/MovieCard";

const SearchResultContainer = ({setRelatedMovie, movies}) => {
    return (
        movies && (
            movies.map(movie =>
                <Box key={movie.id} sx={{display: "flex", flexDirection: "column"}}>
                    <Link to={`/movie/${movie.id}`}>
                        <MovieCard movie={movie}/>
                    </Link>
                    <Button variant="contained" color="secondary" sx={{m: 1}} onClick={() => {
                        setRelatedMovie(movie);
                    }}>Find related Movies
                    </Button>
                </Box>
            ))
    );
};

export default SearchResultContainer;
