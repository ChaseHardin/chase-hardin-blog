import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout-component"

export default ({ data }) => (
  <React.Fragment>
    <Layout>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <img src={node.frontmatter.cover} alt='cover photo'/>
            <h3>{node.frontmatter.title}</h3>
            <div>
              <h6>{node.frontmatter.date} | {node.frontmatter.author}</h6>
            </div>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Layout>
  </React.Fragment>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            cover
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
