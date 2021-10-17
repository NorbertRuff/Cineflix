import React from 'react';
import {Avatar, Divider, List, ListItem, ListItemText, Typography} from "@mui/material";

const MovieCast = ({cast}) => {
    return (
        <List sx={{width: 300}}>
            <Typography variant="h5" color="text.primary"
                        sx={{marginY: 1}}>Cast</Typography>
            {cast && (cast.map(person =>
                <ListItem key={person.id}>
                    <Avatar
                        src={person.person.images[0] && person.person.images[0].small}
                        sx={{width: 50, height: 50}}/>
                    <ListItemText sx={{paddingLeft: 2}} primary={person.person.name}/>
                    <Divider variant="inset" component="li"/>
                </ListItem>
            ))}
        </List>
    );
};
export default MovieCast;
