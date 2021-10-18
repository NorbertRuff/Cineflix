import React from 'react';
import {Typography} from "@mui/material";

const CardOverview = ({overview}) => {
    return (
        <>
            <Typography variant="h4"
                        color="text.primary"
                        marginY="1rem"
                        sx={{fontSize: "clamp(1rem, 2vw, 1.5rem)"}}>Overview</Typography>
            <Typography margin="1rem" variant="body1" color="text.secondary">
                {overview}
            </Typography>
        </>
    );
};

export default CardOverview;
