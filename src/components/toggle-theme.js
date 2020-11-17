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

        localStorage.setItem('isDark', event.target.checked);
    };

    return (
        <div>
            <Switch
                checked={JSON.parse(localStorage.getItem('isDark')) || settings.isDark}
                onChange={handleChange}
                name="toggle"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        </div>
    );
}
