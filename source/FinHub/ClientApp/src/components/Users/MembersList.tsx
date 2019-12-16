import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { UsersApi } from "../../apis/UsersApi";
import { User } from "../../common/types";
import { RootState } from "../../store/reducers/reducer";
import { useProfileStyles } from "../../theme/userStyles";
import { MembersButtons } from "./MembersButtons";
import { MembersListItem } from "./MembersListItem";

const mapStateToProps = (state: RootState) => ({
    activeGroup: state.groups.activeGroup!,
    token: state.user.token!,
});

const MembersList = (props: ConnectedProps<typeof connectedProps>) => {
    const [members, setMembers] = React.useState<User[]>([]);
    const classes = useProfileStyles();

    React.useEffect(() => {
        UsersApi.getGroupUsers(props.token, props.activeGroup.id).then(users => {
            if (typeof users === "string") return;
            setMembers(users);
        });
    }, [props.token, props.activeGroup]);

    return (
        <>
            <MembersButtons />
            <Paper className={classes.content}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {members.map(member =>
                        <MembersListItem
                            key={member.userName}
                            user={member}
                            isAdmin={props.activeGroup.admin.id === member.id}
                        />)}
                    </TableBody>
                </Table>
            </Paper>
        </>
    );
};

const connectedProps = connect(mapStateToProps);
export const ConnectedMembersList = connectedProps(MembersList);
