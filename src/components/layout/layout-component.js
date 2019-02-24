import React from "react"
import Menu from "../menu/menu-component"
import Banner from "../banner/banner-component"

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Banner/>
      <Menu/>
      <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        {children}
      </div>
    </React.Fragment>
  )
}
