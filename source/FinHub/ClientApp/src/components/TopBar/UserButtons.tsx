import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React from "react";
import { Link } from "react-router-dom";
import { useTopBarStyles } from "../../theme/topBarStyles";

interface Props {
    onLogout: () => void;
}

export function UserButtons(props: Props) {
    const [open, setOpen] = React.useState(false);
    const ref = React.useRef<HTMLButtonElement | null>(null);
    const classes = useTopBarStyles();

    const onClick = (state: boolean) => () => setOpen(state);

    return (
        <ClickAwayListener onClickAway={onClick(false)}>
            <div>
                <IconButton className={classes.white} ref={obj => ref.current = obj} onClick={onClick(true)}>
                    <AccountCircle />
                </IconButton>
                <Menu anchorEl={ref.current} open={open} onClose={onClick(false)}>
                    <MenuItem component={Link} to="/profile">Profile</MenuItem>
                    <MenuItem onClick={props.onLogout}>Logout</MenuItem>
                </Menu>
            </div>
        </ClickAwayListener>
    );
}
