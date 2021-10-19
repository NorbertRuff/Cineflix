import React, {useEffect, useState} from 'react';
import {Button, CardActions, CardContent, CircularProgress, Typography} from "@mui/material";
import {dataHandler} from "../../services/DataHandler";

const WikiMiniCardMovieCard = ({MovieInfo}) => {
    const wikiLinkUrl = `https://en.wikipedia.org/?curid=`;
    const wikiFetchBaseUrl = `https://en.wikipedia.org/w/api.php?`;

    const wikiFetchConfig = {
        action: 'query',
        format: 'json',
        origin: '*',
        list: 'search',
        srlimit: 1,
        srsearch: MovieInfo,
        srnamespace: 0,
        srprop: 'snippet'
    }

    const createQueryString = (obj) => {
        return Object.keys(obj)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
            .join('&');
    }

    const wikiFetchFullUrl = wikiFetchBaseUrl + createQueryString(wikiFetchConfig);

    const [wikiInfo, setWikiInfo] = useState("");
    const [wikiLoading, setWikiLoading] = useState(false);
    const [wikiError, setWikiError] = useState(false);


    useEffect(() => {
        dataHandler._api_get(wikiFetchFullUrl, setWikiInfo, setWikiError, setWikiLoading)
    }, [wikiFetchFullUrl]);

    if (wikiLoading) {
        return (
            <CardContent>
                <Typography fontSize="14px" color="text.secondary" gutterBottom>
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
                <Typography fontSize="14px" color="text.secondary" gutterBottom>
                    Wiki info
                </Typography>
                An error occurred while fetching information
            </CardContent>

        );
    }

    if (wikiInfo && (wikiInfo.query.search).length === 0) {
        return (
            <CardContent>
                <Typography fontSize="14px" color="text.secondary" gutterBottom>
                    Imdb info
                </Typography>
                <p>No result</p>
            </CardContent>
        )
    }

    return (
        <>
            <CardContent>
                <Typography fontSize="14px" color="text.secondary" gutterBottom>
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
                <Button target="_blank" size="small" href={wikiLinkUrl + wikiInfo.query.search[0].pageid}>Learn
                    More</Button>}
            </CardActions>
        </>
    );
};

export default WikiMiniCardMovieCard;
