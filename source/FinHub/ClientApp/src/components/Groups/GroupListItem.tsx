import ListItem from "@material-ui/core/ListItem";
import React from "react";
import { Group } from "../../common/types";
import ListItemText from "@material-ui/core/ListItemText";

interface Props {
    group: Group;
    selected?: boolean;
    onClick: () => void;
}

const GroupListItem = (props: Props) => {
    return (
        <ListItem button selected={props.selected} onClick={props.onClick}>
            <ListItemText primary={props.group.name} secondary={`${props.group.balance} €`} />
        </ListItem>
    );
}

export default GroupListItem;
