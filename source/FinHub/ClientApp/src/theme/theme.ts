import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        error: {
            main: "#f44336",
        },
        primary: {
            contrastText: "#ffffff",
            dark: "#595070",
            light: "#6187b3",
            main: "#305a83",
        },
        secondary: {
            contrastText: "#ffffff",
            dark: "#0077ac",
            light: "#72d7ff",
            main: "#328AC6",
        },
    },
    shape: {
        borderRadius: 8,
    },
});

export default theme;
