
import React from "react"
import Layout from "../layout"
import { graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"
import Img from "gatsby-image"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  const disqusShortname = "https-chasehardin-github-io-blog"
  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title,
  }

  return (
    <Layout>
      <div className={'layout-content'}>
        <Img fluid={featuredImgFluid} />
        <h1>{post.frontmatter.title}</h1>
        <div style={{ 'textAlign': 'justify' }} dangerouslySetInnerHTML={{ __html: post.html }} />
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
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
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`