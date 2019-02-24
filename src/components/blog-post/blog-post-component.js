import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout-component"

export default function BlogPost ({data}) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div className='blog-content' dangerouslySetInnerHTML={{__html: post.html}}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
