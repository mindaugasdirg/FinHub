import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { User } from "../../common/types";

interface Props {
    user: User;
}

export const UserView = (props: Props) => (
    <List>
        <ListItem>
            <ListItemText>
                Email:
            </ListItemText>
            <Typography align="right" color="secondary">
                {props.user.email}
            </Typography>
        </ListItem>
        <ListItem>
            <ListItemText>
                Username:
            </ListItemText>
            <Typography align="right" color="secondary">
                {props.user.userName}
            </Typography>
        </ListItem>
    </List>
);
