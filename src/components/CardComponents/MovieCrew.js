import React from 'react';
import {Divider, List, ListItem, ListItemText, Typography} from "@mui/material";


const MovieCrew = ({crew}) => {
    return (
        <List sx={{width: 300}}>
            <Typography variant="h5" color="text.primary"
                        sx={{marginY: 1}}>Crew</Typography>
            {crew && (crew.map(person =>
                <ListItem key={person.id}>
                    <ListItemText sx={{paddingLeft: 2}} primary={person.person.name}
                                  secondary={person.role.job}/>
                    <Divider variant="inset" component="li"/>
                </ListItem>
            ))}
        </List>
    );
};

export default MovieCrew;
