import React, {useState} from 'react';
import {SearchContainer, TitleContainer} from "../styles/SearchPage.Styled";
import {Box, Button, Popper, TextField, Typography} from "@mui/material";

const SearchComponent = ({getMoviesByKeyword, setSearchKeyword}) => {
    const KEYCODE_FOR_ENTER = 13;
    const [popperAnchorElement, setPopperAnchorElement] = useState(null);
    const popperIsOpen = Boolean(popperAnchorElement);

    const [searchValue, setSearchValue] = useState("");

    function handleSearchRequest(event) {
        if (searchValue) {
            setSearchKeyword(searchValue);
            setSearchValue("")
            document.getElementById("searchbar").value = "";
            getMoviesByKeyword();
            setPopperAnchorElement(null);
        } else {
            setPopperAnchorElement(popperAnchorElement ? null : document.getElementById("searchButton"));
            setSearchValue("")
        }
    }

    function handleKeyPress(event) {
        let key = event.keyCode || event.which;
        if (key === KEYCODE_FOR_ENTER) {
            handleSearchRequest();
        }
    }

    return (
        <>
            <TitleContainer>
                <Typography variant="h3">Movie finder</Typography>
                <Typography variant="h5">Search for a movie</Typography>
            </TitleContainer>
            <SearchContainer>
                <TextField fullWidth id="searchbar"
                           data-testid="searchbar"
                           label="Movie title"
                           variant="filled"
                           style={{
                               backgroundColor: "rgba(255,255,255,0.1)"
                           }}
                           InputProps={{
                               id: "searchbar",
                               style: {
                                   fontSize: "1.3rem",
                                   color: "white"
                               }
                           }}
                           color="info"
                           onChange={(event) => setSearchValue(event.target.value)}
                           onKeyPress={(event) => {
                               handleKeyPress(event)
                           }}
                />
                <Popper open={popperIsOpen} anchorEl={popperAnchorElement} placement="right">
                    <Box sx={{border: 1, p: 1, m: 2}}>
                        Please fill the search area!
                    </Box>
                </Popper>
                <Button id="searchButton" onClick={handleSearchRequest} variant="contained">Search</Button>
            </SearchContainer>
        </>
    );
};

export default SearchComponent;
