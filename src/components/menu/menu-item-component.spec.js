import React from "react"
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import MenuItem from "./menu-item-component"
import { Link } from "gatsby"

configure({ adapter: new Adapter() });

describe("MenuItem", () => {
  it('should render menu items', () => {
    const props = {
      to: '/random',
      children: 'child'
    };

    const component = shallow(<MenuItem {...props}/>);

    expect(getLink(component).prop('to')).toEqual(props.to);
    expect(getLink(component).children().text()).toEqual(props.children);
  });

  function getLink(component) {
    return component.find(Link);
  }
})
