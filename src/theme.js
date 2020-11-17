import { createMuiTheme } from "@material-ui/core/styles";
import green from '@material-ui/core/colors/green';

export const darkTheme = createMuiTheme({
    root: {
        color: '#FFF'
    },
    palette: {
        type: "dark",
        primary: {
            main: '#000000',
        },
        secondary: {
            main: green[500],
        },
        text: {
            primary: '#FFFFFF',
            main: green[500]
        }
    }
});

export const lightTheme = createMuiTheme({
    root: {
        color: '#000'
    },
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: green[500],
        },
        text: {
            primary: '#000',
            main: green[500]
        }
    }
});
