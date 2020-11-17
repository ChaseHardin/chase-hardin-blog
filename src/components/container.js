import React from 'react';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from '@material-ui/core/CssBaseline';
import { darkTheme, lightTheme } from '../theme';
import { Navigation } from './nav/navigation';
import { SettingsContext } from '../contexts/settings-context';

export const Container = props => {
    const defaultState = JSON.parse(window.localStorage.getItem('isDark') || true);
    const [isDark, setTheme] = React.useState(defaultState)
    const { settings } = React.useContext(SettingsContext);

    React.useEffect(() => {
        setTheme(JSON.parse(localStorage.getItem('isDark')))
    }, [settings.isDark])

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <CssBaseline />
            <Navigation {...props} />
        </ThemeProvider>
    )
}