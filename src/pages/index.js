import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, graphql } from "gatsby"
import { FaCalendar } from "react-icons/fa"

import Layout from '../components/layout/layout-component'
import { FaUser } from 'react-icons/fa/index'

export default ({ data }) => (
  <React.Fragment>
    <Layout>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <img src={node.frontmatter.cover} alt=''/>
            <h3>{node.frontmatter.title}</h3>
            <div>
              <span className='blog-details'><FaCalendar className='fa-icon-overrides'/> {node.frontmatter.date}</span>
              <span className='blog-details'><FaUser className='fa-icon-overrides'/> {node.frontmatter.author}</span>
            </div>
            <p className='blog-excerpt'>{node.excerpt}</p>
          </Link>
          <hr />

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
            date(formatString: "YYYY-MM-DD")
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
