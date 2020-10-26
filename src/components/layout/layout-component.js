import React from "react"
import Banner from "../banner/banner-component"
import 'fontsource-roboto';
import {Menu} from '../menu';

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <Banner />
      <div style={{ margin: `3rem auto`, maxWidth: 750, padding: `0 1rem` }}>
        {children}
      </div>
    </>
  )
}
