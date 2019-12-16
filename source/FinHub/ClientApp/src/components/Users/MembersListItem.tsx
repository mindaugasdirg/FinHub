import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import React from "react";
import { User } from "../../common/types";

interface Props {
    user: User;
    isAdmin: boolean;
}

export const MembersListItem = (props: Props) => {
    return (
        <TableRow>
            <TableCell>{props.isAdmin ? <BusinessCenterIcon  /> : <div/>}</TableCell>
            <TableCell>{props.user.email}</TableCell>
            <TableCell>{props.user.userName}</TableCell>
        </TableRow>
    );
};
