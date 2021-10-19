import React from 'react';
import {CardWrapper, GenresContainer} from "../../styles/MovieCard.Styled";
import {Rating} from "@mui/material";
import {convertIsoDate, roundHalf} from "../../utils/convertUtils";
import NoPic from "../../assets/img/nopic.png";


const WrapperMovieCard = ({movie}) => {
    return (
        <CardWrapper key={movie.id}>
            <h2>{movie.name}</h2>
            {<img src={movie.img ? movie.img.medium : NoPic} alt={movie.name}/>}
            <h3>{convertIsoDate(movie.releaseDate)}</h3>
            <h3>
                <Rating name="half-rating-read" defaultValue={roundHalf(movie.score)} precision={0.5} readOnly/>
            </h3>
            <GenresContainer>
                {movie.genres.length !== 0 ? movie.genres.map(genre =>
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

export default WrapperMovieCard;
