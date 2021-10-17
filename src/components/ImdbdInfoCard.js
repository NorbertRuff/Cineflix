import React from 'react';
import {Backdrop, Button, CardActions, CardContent, CircularProgress, Typography} from "@mui/material";
import {ErrorMessage} from "../styles/PageContainer.Style";

const ImdbInfoCard = ({imdbInfo, imdbLoading, imdbError}) => {
    const imdbBaseUrl = `https://www.imdb.com/title/`;

    if (imdbLoading) {
        return (
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Imdb info
                </Typography>
                <p>Data is loading...</p>
                <Backdrop sx={{color: 'var(--clr-primary-200)', zIndex: (theme) => theme.zIndex.drawer + 1}}
                          open={imdbLoading}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </CardContent>
        )
    }

    if (imdbError) {
        return (
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Imdb info
                </Typography>
                <ErrorMessage>An error occurred while fetching information!</ErrorMessage>
            </CardContent>

        );
    }
    return (imdbInfo &&
        <>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Imdb info
                </Typography>
            </CardContent>
            <CardActions>
                {imdbInfo.results[0] &&
                <Button size="small" href={imdbBaseUrl + imdbInfo.results[0].id}>Check {imdbInfo.results[0].title} on
                    Imdb</Button>}
            </CardActions>
        </>
    );
};

export default ImdbInfoCard;
