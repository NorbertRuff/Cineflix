import React from 'react';
import {CardMedia} from "@mui/material";
import NoPic from "../../assets/img/nopic.png";

const ThumbnailMovieCard = ({movie}) => {
    return (
        <CardMedia
            component="img"
            sx={{width: "clamp(200px,350px,400px)"}}
            image={movie.img ? movie.img.medium : NoPic}
            alt={movie.name}
        />
    );
};

export default ThumbnailMovieCard;
