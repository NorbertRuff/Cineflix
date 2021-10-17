import React, {useEffect, useState} from 'react';
import {Button, CardActions, CardContent, CircularProgress, Typography} from "@mui/material";
import {dataHandler} from "../services/dataHandler";

const WikiInfoCard = ({MovieInfo}) => {
    const wikiBaseUrl = `https://en.wikipedia.org/?curid=`;

    const wikiBaseFetchUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srlimit=1&srsearch=${MovieInfo}&srnamespace=0&srprop=snippet`;


    const [wikiInfo, setWikiInfo] = useState("");
    const [wikiLoading, setWikiLoading] = useState(false);
    const [wikiError, setWikiError] = useState(false);


    useEffect(() => {
        dataHandler._api_get(wikiBaseFetchUrl, setWikiInfo, setWikiError, setWikiLoading)
    }, [MovieInfo, wikiBaseFetchUrl]);

    if (wikiLoading) {
        return (
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Wiki info
                </Typography>
                <p>Data is loading...</p>
                <CircularProgress color="inherit"/>
            </CardContent>
        )
    }

    if (wikiError) {
        return (
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Wiki info
                </Typography>
                An error occurred while fetching information
            </CardContent>

        );
    }

    if (wikiInfo && (wikiInfo.query.search).length === 0) {
        return (
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Imdb info
                </Typography>
                <p>No result</p>
            </CardContent>
        )
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
