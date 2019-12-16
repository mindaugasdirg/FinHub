import { IconButton, Snackbar, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { AlertsReducerActions } from "../../store/reducers/alerts/AlertsReducerActions";
import { RootState } from "../../store/reducers/reducer";
import { useAlertStyles } from "../../theme/alertStyles";

const mapStateToProps = (state: RootState) => ({
    message: state.alerts.message,
    type: state.alerts.type,
    open: state.alerts.open,
});

const mapDispatchToProps = {
    dismissAlert: AlertsReducerActions.dismissAlert,
};

const Alert = (props: ConnectedProps<typeof connectedProps>) => {
    const classes = useAlertStyles();

    return (
        <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "center" }} open={props.open}>
            <SnackbarContent
                className={classes[props.type]}
                message={<span className={classes.message}>{props.message}</span>}
                action={[
                    <IconButton key="close" aria-label="close" color="inherit" onClick={props.dismissAlert}>
                        <CloseIcon className={classes.icon} />
                    </IconButton>,
                ]} />
        </Snackbar>
    );
};

const connectedProps = connect(mapStateToProps, mapDispatchToProps);
export const ConnectedAlert = connectedProps(Alert);
