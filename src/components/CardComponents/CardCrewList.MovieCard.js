import React from 'react';
import {List, ListItem, ListItemText, Typography} from "@mui/material";


const CardCrewListMovieCard = ({crew}) => {
    return (
        <List sx={{width: 300}}>
            <Typography variant="h5" color="text.primary"
                        sx={{marginY: 1}}>Crew</Typography>
            {crew && (crew.map(person =>
                <ListItem key={person.id}>
                    <ListItemText sx={{paddingLeft: 2}} primary={person.person.name}
                                  secondary={person.role.job}/>
                </ListItem>
            ))}
        </List>
    );
};

export default CardCrewListMovieCard;
