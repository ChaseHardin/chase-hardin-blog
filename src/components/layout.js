import React from 'react';
import { SettingsProvider } from '../contexts/settings-context';
import './layout.css'
import { Container } from '../components/container';

function ResponsiveDrawer(props) {
  return (
    <SettingsProvider>
      <Container {...props} />
    </SettingsProvider>
  )
}

export default ResponsiveDrawer;
