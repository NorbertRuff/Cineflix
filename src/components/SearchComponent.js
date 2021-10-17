import React, {useState} from 'react';
import {SearchContainer, TitleContainer} from "../styles/SearchPage.Styled";
import {Box, Button, Popper, TextField} from "@mui/material";

const SearchComponent = ({getMovies, setSearchKeyword}) => {
    const KEYCODE_FOR_ENTER = 13;
    const [popperAnchorElement, setPopperAnchorElement] = useState(null);
    const popperIsOpen = Boolean(popperAnchorElement);

    const [searchValue, setSearchValue] = useState("");

    function handleSearchRequest(event) {
        if (searchValue) {
            setSearchKeyword(searchValue);
            getMovies();
            setPopperAnchorElement(null);
            setSearchValue("")
        } else {
            setPopperAnchorElement(popperAnchorElement ? null : document.getElementById("searchButton"));
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
                <h1>Welcome</h1>
                <h3>Search for a movie</h3>
            </TitleContainer>
            <SearchContainer>
                <TextField fullWidth id="contained"
                           label="Search Movie"
                           variant="filled"
                           onChange={(event) => setSearchValue(event.target.value)}
                           onKeyPress={(event) => handleKeyPress(event)}
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
