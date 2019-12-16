import { makeStyles } from "@material-ui/core";

export const useFormStyle = makeStyles(theme => ({
    form: {
        margin: theme.spacing(1),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        marginTop: theme.spacing(2),
    },
    link: {
        marginTop: theme.spacing(1),
    }
}));

export const useStandaloneFormStyle = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
    },
}));
