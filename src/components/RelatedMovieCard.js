import React from 'react';
import {OverView, RatingDiv, RelatedCardWrapper, RelatedDate, RelatedGenresContainer} from "../styles/MovieCard.Styled";
import {Rating} from "@mui/material";
import {convertIsoDate, roundHalf} from "../utils/convertUtils";
import NoPic from "../assets/img/nopic.png";
import {Link} from "react-router-dom";


const RelatedMovieCard = ({movie}) => {
    return (
        <Link to={`/movie/${movie.id}`}>
            <RelatedCardWrapper key={movie.id}>
                <h2>{movie.name}</h2>
                {<img src={movie.img ? movie.img.medium : NoPic} alt={movie.name}/>}
                <RelatedDate>{convertIsoDate(movie.releaseDate)}</RelatedDate>
                <RatingDiv>
                    <Rating name="half-rating-read" defaultValue={roundHalf(movie.score)} precision={0.5} readOnly/>
                </RatingDiv>
                <OverView>{movie.overview}</OverView>
                <RelatedGenresContainer>
                    {movie.genres.length !== 0 ? movie.genres.map(genre =>
                        <div key={genre.name}>
                            <h4>{genre.name}</h4>
                        </div>
                    ) : <div>
                        <h4>No genre</h4>
                    </div>}
                </RelatedGenresContainer>
            </RelatedCardWrapper>
        </Link>
    );
};

export default RelatedMovieCard;
