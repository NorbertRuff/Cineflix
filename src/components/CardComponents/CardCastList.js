import React from 'react';
import {Avatar, List, ListItem, ListItemText, Typography} from "@mui/material";

const CardCastList = ({cast}) => {
    return (
        <List sx={{width: 300}}>
            <Typography variant="h5"
                        color="text.primary"
                        marginY="1rem">Cast</Typography>
            {cast && (cast.map(person =>
                <ListItem key={person.id}>
                    <Avatar
                        src={person.person.images[0] && person.person.images[0].small}
                        sx={{width: 50, height: 50}}/>
                    <ListItemText sx={{paddingLeft: 2}} primary={person.person.name}/>
                </ListItem>
            ))}
        </List>
    );
};
export default CardCastList;
