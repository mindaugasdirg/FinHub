import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        error: {
            main: "#f44336",
        },
        primary: {
            contrastText: "#ffffff",
            dark: "#003156",
            light: "#6187b3",
            main: "#305a83",
        },
        secondary: {
            contrastText: "#000000",
            dark: "#0077ac",
            light: "#72d7ff",
            main: "#31a6de",
        },
    },
});

export default theme;
