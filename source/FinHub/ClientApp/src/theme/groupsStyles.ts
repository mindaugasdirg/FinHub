import { makeStyles } from "@material-ui/core";

export const useGroupsSelectionStyle = makeStyles({
    selector: {
        minWidth: "250px",
    },
    white: {
        color: "#ffffff",
    },
});

export const useGroupOverViewStyles = makeStyles(theme => ({
    grid: {
        marginTop: theme.spacing(4),
    }
}));
