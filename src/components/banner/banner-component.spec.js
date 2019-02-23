import React from "react"
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Banner from "./banner-component"

configure({ adapter: new Adapter() });

describe("Banner", () => {
  it('should render', () => {
    const component = shallow(<Banner />);

    expect(component.length).toEqual(1)
  })
})
