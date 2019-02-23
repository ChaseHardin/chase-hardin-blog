import React from "react"
import { Link } from "gatsby"
import './menu.css'

export default function MenuItem(props) {
  return (
    <li className='menu-item'>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}
