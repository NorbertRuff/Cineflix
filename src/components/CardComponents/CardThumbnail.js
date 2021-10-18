import React from 'react';
import {CardMedia} from "@mui/material";
import NoPic from "../../assets/img/nopic.png";

const CardThumbnail = ({movie}) => {
    return (
        <CardMedia
            component="img"
            sx={{maxWidth: 400}}
            image={movie.img ? movie.img.medium : NoPic}
            alt={movie.name}
        />
    );
};

export default CardThumbnail;
