import React from "react"
import Menu from "../menu/menu-component"

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Menu/>
      <div style={{ margin: `3rem auto`, maxWidth: 750, padding: `0 1rem` }}>
        {children}
      </div>
    </React.Fragment>
  )
}
