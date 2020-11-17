import React from 'react';

const DEFAULT_STATE = {
    isDark: JSON.parse(localStorage.getItem('isDark'))
};

export const SettingsContext = React.createContext(DEFAULT_STATE);

export const SettingsProvider = props => {
    const [settings, setSettings] = React.useState(DEFAULT_STATE);

    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {props.children}
        </SettingsContext.Provider>
    )
}