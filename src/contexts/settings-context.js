import React from 'react';

const DEFAULT_STATE = {
    isDark: typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('isDark')) : true
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