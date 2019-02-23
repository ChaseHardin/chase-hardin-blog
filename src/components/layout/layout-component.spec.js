import React from "react"
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Layout from "./layout-component"

configure({ adapter: new Adapter() });

describe("Layout", () => {
  it('should render prop message', () => {
    const props = {
      children: 'anything'
    }

    const component = shallow(<Layout {...props}/>);

    expect(component.text()).toEqual(props.children)
  })
})
