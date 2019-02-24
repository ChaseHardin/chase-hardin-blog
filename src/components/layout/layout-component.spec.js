import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import Layout from "./layout-component"
import Menu from "../menu/menu-component"
import Banner from "../banner/banner-component"

configure({ adapter: new Adapter() })

describe("Layout", () => {
  let props

  beforeEach(() => {
    props = {
      children: "anything",
    }
  })

  it("should render message based on prop", () => {
    expect(render().find("div").text()).toEqual(props.children)
  })

  it("should have the banner", () => {
    const banner = render().find(Banner);

    expect(banner.length).toEqual(1);
  })

  it("should render Menu component", () => {
    const menu = render().find(Menu)

    expect(menu.length).toEqual(1)
  })

  function render() {
    return shallow(<Layout {...props}/>)
  }
})
