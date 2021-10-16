import React from 'react';
import {CardMedia} from "@mui/material";

const MovieThumbnail = ({movie}) => {
    return (
        <CardMedia
            component="img"
            sx={{minWidth: 400}}
            image={movie.img.url}
            alt={movie.name}
        />
    );
};

export default MovieThumbnail;
