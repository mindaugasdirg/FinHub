import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { Group } from "../../common/types";

interface Props {
    group: Group;
    selected?: boolean;
    onClick: () => void;
}

export const GroupListItem = (props: Props) => {
    return (
        <ListItem button selected={props.selected} onClick={props.onClick}>
            <ListItemText primary={props.group.name} secondary={`${props.group.balance} €`} />
        </ListItem>
    );
};
