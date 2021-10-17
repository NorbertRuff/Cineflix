import React from 'react';
import {ResultContainer} from "../../styles/SearchPage.Styled";
import {Link} from "react-router-dom";
import MovieCard from "../MovieCard";

const MovieResultCardComponent = ({movies}) => {
    return (
        <ResultContainer>
            {movies && (
                movies.length === 0 ? <h1>No result</h1> :
                    movies.map(movie =>
                        <Link key={movie.id} to={`/movie/${movie.id}`}>
                            <MovieCard movie={movie}/>
                        </Link>
                    ))}
        </ResultContainer>
    );
};

export default MovieResultCardComponent;
