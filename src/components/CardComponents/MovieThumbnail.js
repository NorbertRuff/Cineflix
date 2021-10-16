import React from 'react';
import {CardMedia} from "@mui/material";
import NoPic from "../../assets/img/nopic.png";

const MovieThumbnail = ({movie}) => {
    return (
        <CardMedia
            component="img"
            sx={{minWidth: 400}}
            image={movie.img ? movie.img.url : NoPic}
            alt={movie.name}
        />
    );
};

export default MovieThumbnail;
