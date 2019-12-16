import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import EuroIcon from "@material-ui/icons/Euro";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import React from "react";
import { Group } from "../../common/types";

interface Props {
    group: Group;
}

export const GroupGeneralCard = (props: Props) => {
    return (
        <Card>
            <CardHeader title="General"/>
            <CardContent>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <EuroIcon />
                        </ListItemIcon>
                        <ListItemText>Balance</ListItemText>
                        <Typography align="right" color="secondary" variant="subtitle1">{props.group.balance}</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <SupervisorAccountIcon />
                        </ListItemIcon>
                        <ListItemText>Join code</ListItemText>
                        <Typography align="right" color="secondary" variant="subtitle1">{props.group.groupCode}</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <BusinessCenterIcon />
                        </ListItemIcon>
                        <ListItemText>Owner</ListItemText>
                        <Typography align="right" color="secondary" variant="subtitle1">{props.group.admin.userName}</Typography>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};
