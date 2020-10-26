import React from "react"
import { Link, graphql } from "gatsby"
import Button from '@material-ui/core/Button'
import { Cards } from 'react-responsive-cards';
import { Menu } from '../components/menu';

export default ({ data }) => {
  const details = data.allMarkdownRemark.edges.map(({ node }) => {
    return {
      title: node.frontmatter.title,
      description: node.excerpt,
      image: node.frontmatter.cover,
      renderFooter: <Button variant="outlined"><Link to={node.fields.slug}>Read</Link></Button>
    }
  });

  return (
    <React.Fragment>
      <Menu />
      <div style={{ margin: `3rem auto`, padding: `0 1rem` }}>
        <Cards details={details} />
      </div>
    </React.Fragment>
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
