import React from "react"
import { Link } from "gatsby"
import MenuItem from "./menu-item-component"

export default function Menu() {
  return (
    <header className='menu'>
      <div className='chase'>
        <ul>
          <MenuItem to='/'>HOME</MenuItem>
          <MenuItem to='/about/'>ABOUT</MenuItem>
        </ul>
      </div>
      <Link to='/'>
        <div className='app-name'>
          CHASE<br />HARDIN
        </div>
      </Link>
    </header>
  )
}
