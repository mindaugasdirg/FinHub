import FormControl from "@material-ui/core/FormControl";
import Hidden from "@material-ui/core/Hidden";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { find } from "lodash/fp";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { setActiveGroup } from "../../actions/GroupsActions";
import { RootState } from "../../store/reducers/reducer";
import { useGroupsSelectionStyle } from "../../theme/groupsStyles";

const mapStateToProps = (state: RootState) => ({
    activeGroup: state.groups.activeGroup,
    groups: state.groups.groups,
});

const mapDispatchToProps = {
    setActiveGroup,
};

const GroupSelection = (props: ConnectedProps<typeof connectedProps>) => {
    const classes = useGroupsSelectionStyle();

    const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.setActiveGroup(find(group => group.id === (event.target.value as number), props.groups));
    };

    return (
        <Hidden mdDown>
            <FormControl className={classes.selector}>
                <Select className={classes.white} value={props.activeGroup ? props.activeGroup.id : 0} onChange={onChange}>
                <MenuItem value={0} disabled>Group</MenuItem>
                    {props.groups.map(group => <MenuItem key={group.id} value={group.id}>{group.name}</MenuItem>)}
                </Select>
            </FormControl>
        </Hidden>
    );
};

const connectedProps = connect(mapStateToProps, mapDispatchToProps);
export const ConnectedGroupSelection = connectedProps(GroupSelection);
