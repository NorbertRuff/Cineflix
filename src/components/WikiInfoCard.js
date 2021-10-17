import React from 'react';
import {Backdrop, Button, CardActions, CardContent, CircularProgress, Typography} from "@mui/material";
import {ErrorMessage} from "../styles/PageContainer.Style";

const WikiInfoCard = ({wikiInfo, wikiLoading, wikiError}) => {
    const wikiBaseUrl = `https://en.wikipedia.org/?curid=`;

    if (wikiLoading) {
        return (
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Wiki info
                </Typography>
                <p>Data is loading...</p>
                <Backdrop sx={{color: 'var(--clr-primary-200)', zIndex: (theme) => theme.zIndex.drawer + 1}}
                          open={wikiLoading}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </CardContent>
        )
    }

    if (wikiError) {
        return (
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Wiki info
                </Typography>
                <ErrorMessage>An error occurred while fetching information!</ErrorMessage>
            </CardContent>

        );
    }
    return (
        <>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Wiki info
                </Typography>
                <Typography variant="h5" component="div">
                    <div dangerouslySetInnerHTML={{__html: wikiInfo.query && wikiInfo.query.search[0].title}}/>
                </Typography>
                <Typography variant="body2" component="div">
                    <div
                        dangerouslySetInnerHTML={{__html: wikiInfo.query && wikiInfo.query.search[0].snippet + '...'}}/>
                </Typography>
            </CardContent>
            <CardActions>
                {wikiInfo.query &&
                <Button size="small" href={wikiBaseUrl + wikiInfo.query.search[0].pageid}>Learn More</Button>}
            </CardActions>
        </>
    );
};

export default WikiInfoCard;
