import React from "react"
import 'fontsource-roboto';
import { Menu } from '../menu';
import { ThemeProvider } from "@material-ui/styles";
import {theme} from '../../theme';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Menu />
      <div style={{ margin: `3rem auto`, maxWidth: 750, padding: `0 1rem` }}>
        {children}
      </div>
    </ThemeProvider>
  )
}
