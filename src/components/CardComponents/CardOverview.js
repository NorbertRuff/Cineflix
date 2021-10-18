import React from 'react';
import {Typography} from "@mui/material";

const CardOverview = ({overview}) => {
    return (
        <>
            <Typography variant="h4" color="text.primary"
                        sx={{marginY: 1, fontSize: "clamp(1rem, 2vw, 1.5rem)"}}>Overview</Typography>
            <Typography variant="body2" color="text.secondary" sx={{m: 1}}>
                {overview}
            </Typography>
        </>
    );
};

export default CardOverview;
