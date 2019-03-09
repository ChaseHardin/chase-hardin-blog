import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout-component"
import { DiscussionEmbed } from "disqus-react"

export default function BlogPost(props) {
  const post = props.data.markdownRemark
  const disqusShortname = "https-chasehardin-github-io-blog"
  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title,
  }

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div className='blog-content' dangerouslySetInnerHTML={{ __html: post.html }}/>
      </div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
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
