import { makeStyles } from "@material-ui/core";

export const useResourceActionsStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(4),
    },
    expanded: {
        flexGrow: 1,
    },
}));
