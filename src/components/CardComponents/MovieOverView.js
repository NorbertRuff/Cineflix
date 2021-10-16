import React from 'react';
import {Typography} from "@mui/material";

const MovieOverView = ({overview}) => {
    return (
        <>
            <Typography variant="h4" color="text.primary" sx={{marginY: 1}}>Overview</Typography>
            <Typography variant="body2" color="text.secondary" sx={{m: 1}}>
                {overview}
            </Typography>
        </>
    );
};

export default MovieOverView;
