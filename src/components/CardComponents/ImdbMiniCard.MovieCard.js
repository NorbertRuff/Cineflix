import React, {useEffect, useState} from 'react';
import {Button, CardActions, CardContent, CircularProgress, Typography} from "@mui/material";
import {dataHandler} from "../../services/DataHandler";

const ImdbMiniCardMovieCard = ({MovieInfo}) => {
    /*<------------------Imdb fetch url setup-------------------->*/
    const imdbBaseUrl = `https://www.imdb.com/title/`;
    const {REACT_APP_IMDB_API_KEY} = process.env;
    const baseUrl = `https://imdb-api.com/en/API/SearchMovie/${REACT_APP_IMDB_API_KEY}/${MovieInfo.toString()}`;


    /*<------------------Imdb hooks-------------------->*/
    const [imdbInfo, setImdbInfo] = useState("");
    const [imdbLoading, setImdbLoading] = useState(false);
    const [imdbError, setImdbError] = useState(false);
    /*<------------------/Imdb hooks-------------------->*/


    useEffect(() => {
        dataHandler._api_get(baseUrl, setImdbInfo, setImdbError, setImdbLoading)
    }, [MovieInfo, baseUrl]);


    if (imdbLoading) {
        return (
            <CardContent>
                <Typography fontSize="14px" color="text.secondary" gutterBottom>
                    Imdb info
                </Typography>
                <p>Data is loading...</p>
                <CircularProgress color="inherit"/>
            </CardContent>
        )
    }

    if (imdbInfo.results === null) {
        return (
            <CardContent>
                <Typography fontSize="14px" color="text.secondary" gutterBottom>
                    Imdb info
                </Typography>
                <p>{imdbInfo.errorMessage ? "Error with Imdb api: " + imdbInfo.errorMessage : "No result"}</p>
            </CardContent>
        )
    }


    if (imdbError || imdbInfo.errorMessage) {
        return (
            <CardContent>
                <Typography fontSize="14px" color="text.secondary" gutterBottom>
                    Imdb info
                </Typography>
                An error occurred while fetching information! {imdbInfo.errormessage}
            </CardContent>

        );
    }
    return (imdbInfo &&
        <>
            <CardContent>
                <Typography fontSize="14px" color="text.secondary" gutterBottom>
                    Imdb info
                </Typography>
            </CardContent>
            <CardActions>
                {imdbInfo.results &&
                <Button target="_blank" size="small"
                        href={imdbBaseUrl + imdbInfo.results[0].id}>Check {imdbInfo.results[0].title} on
                    Imdb</Button>}
            </CardActions>
        </>
    );
};

export default ImdbMiniCardMovieCard;
