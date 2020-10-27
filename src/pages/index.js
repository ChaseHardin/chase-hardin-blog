import React from "react"
import { Link, graphql } from "gatsby"
import Button from '@material-ui/core/Button'
import { Cards } from 'react-responsive-cards';
import { Menu } from '../components/menu';

export default ({ data }) => {
  const details = data.allMarkdownRemark.edges.map(({ node }) => {
    if (node.frontmatter.published) {
      return {
        title: node.frontmatter.title,
        description: node.excerpt,
        image: node.frontmatter.cover,
        renderFooter: <Button
          variant="contained"
          size={'large'}
          style={{ float: 'right', backgroundColor: 'black' }}><Link to={node.fields.slug}>Read More</Link></Button>
      }
    }
    return {
      title: node.frontmatter.title,
      description: node.excerpt,
      image: node.frontmatter.cover,
      renderFooter: <Button
        disabled
        variant="contained"
        size={'large'} style={{ float: 'right' }}><Link to={node.fields.slug}>Coming Soon</Link></Button>
    }
  });

  return (
    <>
      <Menu />
      <div style={{ margin: `3rem auto`, padding: `0 1rem` }}>
        <Cards details={details} />
      </div>
    </>
  );
};

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
            published
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
