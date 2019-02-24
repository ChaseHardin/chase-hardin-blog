import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import BlogPost from "./blog-post-component"

configure({ adapter: new Adapter() })

describe("BlogPost", () => {
  let props;

  beforeEach(() => {
    props = {
      data: {
        markdownRemark: {
          frontmatter: {
            title: 'my title'
          },
          html: '<h1>This is my HTML</h1>'
        }
      }
    }
  });

  it("should render", () => {
    const {markdownRemark} = props.data;

    expect(getBlogPostTitle()).toEqual(markdownRemark.frontmatter.title)
    expect(getBlogPostHtml()).toEqual({ __html: `${markdownRemark.html}`})
  })

  function render() {
    return shallow(<BlogPost {...props}/>)
  }

  function getBlogPostTitle() {
    return render().find('h1').text();
  }

  function getBlogPostHtml() {
    return render().find('.blog-content').prop('dangerouslySetInnerHTML');
  }
})
