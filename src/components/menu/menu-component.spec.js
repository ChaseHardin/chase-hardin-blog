import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Menu from './menu-component'
import { Link } from 'gatsby'
import MenuItem from "./menu-item-component"

configure({ adapter: new Adapter() })

describe('Menu', () => {
  let menu

  beforeEach(() => {
    menu = new MenuBuilder().render()
  })

  it('should link to home page', () => {
    expect(menu.getLinkProp()).toEqual('/')
    expect(menu.getLinkText()).toEqual('CHASE HARDIN')
  });

  it('should link to about page', () => {
    expect(menu.getMenuItems().length).toEqual(2);
    expect(menu.getMenuItems().first().prop('to')).toEqual('/')
    expect(menu.getMenuItems().last().prop('to')).toEqual('/about/')
  });

  class MenuBuilder {
    view;

    render() {
      this.view = shallow(<Menu/>)
      return this
    }

    getLink() {
      return this.view.find(Link)
    }

    getMenuItems() {
      return this.view.find(MenuItem);
    }

    getLinkProp(prop = 'to') {
      return this.getLink().prop(prop);
    }

    getLinkText() {
      return this.getLink().children().text()
    }
  }
})
