import React from 'react';
import {CardWrapper, GenresContainer} from "../styles/MovieCard.Styled";
import {Rating} from "@mui/material";
import {convertIsoDate} from "../utils/convertUtils";


const MovieCard = (props) => {
    return (
        <CardWrapper key={props.movie.id}>
            <h2>{props.movie.name}</h2>
            {props.movie.img && <img src={props.movie.img.url} alt={props.movie.name}/>}
            <h3>{convertIsoDate(props.movie.releaseDate)}</h3>
            <h3>
                <Rating name="half-rating-read" defaultValue={props.movie.score / 2} precision={0.5} readOnly/>
            </h3>
            <GenresContainer>
                {props.movie.genres.length !== 0 ? props.movie.genres.map(genre =>
                    <div key={genre.name}>
                        <h4>{genre.name}</h4>
                    </div>
                ) : <div>
                    <h4>No genre</h4>
                </div>}
            </GenresContainer>
        </CardWrapper>
    );
};

export default MovieCard;
