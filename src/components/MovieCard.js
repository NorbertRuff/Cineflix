import React from 'react';
import {GenresContainer, SingleElementContainer} from "../styles/MovieCard.Styled";


const MovieCard = (props) => {
    return (
        <SingleElementContainer key={props.movie.id}>
            <h2>{props.movie.name}</h2>
            <img src={props.movie.img.url} alt={props.movie.name}/>

            <GenresContainer>
                {props.movie.genres.length !== 0 ? props.movie.genres.map(genre =>
                    <div key={genre.name}>
                        <h4>{genre.name}</h4>
                    </div>
                ) : <div>
                    <h4>No genre</h4>
                </div>}
            </GenresContainer>
        </SingleElementContainer>
    );
};

export default MovieCard;
