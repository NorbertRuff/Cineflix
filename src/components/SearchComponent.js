import React, {useState} from 'react';
import {SearchContainer} from "../styles/SearchPage.Styled";
import {Box, Button, Popper, TextField, Typography} from "@mui/material";

const SearchComponent = ({setRelatedMovie, setSearchKeyword}) => {
    const KEYCODE_FOR_ENTER = 13;
    /*<------------------MUi Popper hooks-------------------->*/
    const [popperAnchorElement, setPopperAnchorElement] = useState(null);
    const popperIsOpen = Boolean(popperAnchorElement);
    /*<------------------/MUI Popper hooks------------------->*/


    const [searchValue, setSearchValue] = useState("");


    function handleSearchRequest(event) {
        if (searchValue) {
            document.getElementById("searchbar").value = "";
            setSearchKeyword(searchValue);
            setSearchValue("")
            setRelatedMovie();
            setPopperAnchorElement(null);
        } else {
            setPopperAnchorElement(popperAnchorElement ? null : document.getElementById("searchButton"));
            setSearchValue("")
        }
    }

    /**
     * Checks if the keypress was an Enter.
     * @param event
     */
    function handleKeyPress(event) {
        let key = event.keyCode || event.which;
        if (key === KEYCODE_FOR_ENTER) {
            handleSearchRequest();
        }
    }

    return (
        <>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                <Typography variant="h3">Movie finder</Typography>
                <Typography variant="h5">Search for a movie</Typography>
            </Box>
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
