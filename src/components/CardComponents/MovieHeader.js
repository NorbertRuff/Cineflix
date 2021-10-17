import React from 'react';
import {Avatar, Box, CardHeader, Rating, Typography} from "@mui/material";
import {convertIsoDate, ratingLabels, roundHalf} from "../../utils/convertUtils";

const MovieHeader = ({movie}) => {
    return (
        <CardHeader
            avatar={
                <Avatar aria-label="avatar"
                        src={movie.backdrop !== null ? movie.backdrop.small : undefined}
                        sx={{width: 100, height: 100}}/>
            }
            sx={{backgroundColor: "rgba(45, 225, 175, 0.7)"}}
            title={movie.name}
            titleTypographyProps={{variant: "h3"}}
            subheaderTypographyProps={{marginX: 4, fontSize: 20}}
            subheader={"On air: " + convertIsoDate(movie.releaseDate)}
            action={
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Typography variant="h6" color="text.primary">Rating</Typography>
                    <Rating name="half-rating-read"
                            sx={{marginX: 2}}
                            defaultValue={roundHalf(movie.score)}
                            precision={0.5}
                            readOnly/>
                    {ratingLabels[roundHalf(movie.score)]}
                </Box>
            }
        />
    );
};

export default MovieHeader;
