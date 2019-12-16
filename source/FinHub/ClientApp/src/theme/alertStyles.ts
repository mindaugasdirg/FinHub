import { makeStyles } from "@material-ui/core";
import { blue, green } from "@material-ui/core/colors";

export const useAlertStyles = makeStyles(theme => ({
    success: {
        backgroundColor: green[600],
    },
    info: {
        backgroundColor: theme.palette.error.main,
    },
    error: {
        backgroundColor: blue[600],
    },
    icon: {
        fontSize: 20,
    },
        iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
        message: {
        display: "flex",
        alignItems: "center",
    },
}));
