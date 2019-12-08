import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React from "react";

interface Props {
    onProfileOpen: () => void;
    onLogout: () => void;
}

export default function UserButtons(props: Props) {
    const [open, setOpen] = React.useState(false);
    const ref = React.useRef<HTMLButtonElement | null>(null);

    const onClick = (state: boolean) => () => setOpen(state);

    return (
        <ClickAwayListener onClickAway={onClick(false)}>
            <div>
                <IconButton ref={obj => ref.current = obj} onClick={onClick(true)}>
                    <AccountCircle />
                </IconButton>
                <Menu anchorEl={ref.current} open={open} onClose={onClick(false)}>
                    <MenuItem onClick={props.onProfileOpen}>Profile</MenuItem>
                    <MenuItem onClick={props.onLogout}>Logout</MenuItem>
                </Menu>
            </div>
        </ClickAwayListener>
    );
}
