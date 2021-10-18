import React from 'react';
import {Avatar, Box, CardHeader, Rating, Typography} from "@mui/material";
import {convertIsoDate, ratingLabels, roundHalf} from "../../utils/convertUtils";

const CardTitle = ({movie}) => {
    return (
        <CardHeader
            avatar={
                <Avatar aria-label="avatar"
                        src={movie.backdrop !== null ? movie.backdrop.small : undefined}
                        sx={{width: "clamp(50px,5vw,100px)", height: "clamp(50px,5vw,100px)"}}/>
            }
            sx={{backgroundColor: "rgba(45, 225, 175, 0.7)"}}
            title={movie.name}
            titleTypographyProps={{
                variant: "h3",
                fontSize: "clamp(1rem, 2vw, 1.5rem)",
                fontFamily: "var(--ff-body-bold)"
            }}
            subheaderTypographyProps={{fontSize: "clamp(0.8rem, 1vw, 1.2rem)"}}
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

export default CardTitle;
