import React from 'react';
import Switch from '@material-ui/core/Switch';
import { SettingsContext } from '../contexts/settings-context';

export const ToggleTheme = () => {
    const { settings, setSettings } = React.useContext(SettingsContext);

    const handleChange = event => {
        setSettings({
            ...settings,
            isDark: event.target.checked
        })

        typeof window !== 'undefined' ? window.localStorage.setItem('isDark', event.target.checked) : true;
    };

    return (
        <div>
            <Switch
                checked={typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('isDark')) || settings.isDark : true}
                onChange={handleChange}
                name="toggle"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        </div>
    );
}
