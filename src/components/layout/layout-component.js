import React from "react"
import 'fontsource-roboto';
import {Menu} from '../menu';

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <div style={{ margin: `3rem auto`, maxWidth: 750, padding: `0 1rem` }}>
        {children}
      </div>
    </>
  )
}
