import React from "react"
import { Link, graphql } from "gatsby"
import Button from '@material-ui/core/Button'
import { Cards } from 'react-responsive-cards';
import { Menu } from '../components/menu';
import { SocialMedia } from "../components/social-media";
import { Grid } from "@material-ui/core";
import CardActions from '@material-ui/core/CardActions';

const buttonStyles = {
  backgroundColor: '#242526',
  color: 'white',
  margin: '4px',
  borderRadius: '18px',
  outline: 'none'
};

const makeDetail = (footer, node) => {
  return {
    title: node.frontmatter.title,
    description: node.excerpt,
    image: node.frontmatter.cover,
    categories: node.frontmatter.categories,
    renderFooter: footer
  }
};

export default ({ data }) => {
  const [selectedCategory, setSelectedCategory] = React.useState(undefined);

  const uniqueCategories = [...new Set(data.allMarkdownRemark.edges.flatMap(({ node }) => {
    return node.frontmatter.categories
  }))];

  const details = data.allMarkdownRemark.edges.map(({ node }) => {
    if (node.frontmatter.published) {
      const button = (
        <CardActions>
          <Button
            variant="contained"
            size={'large'}
            style={{ float: 'right', backgroundColor: 'black', borderRadius: '18px' }}>
            <Link to={node.fields.slug}>
              Read More
            </Link>
          </Button>
        </CardActions>
      )

      return makeDetail(button, node);
    }

    const button = (
      <CardActions>
        <Button
          disabled
          variant="contained"
          size={'large'} style={{ float: 'right', borderRadius: '18px' }}>
          <Link to={node.fields.slug}>
            Coming Soon
          </Link>
        </Button>
      </CardActions>
    )

    return makeDetail(button, node);
  });

  const renderFilterChips = () => {
    const chips = uniqueCategories.map(category => <Button
      key={category}
      size={'large'}
      style={buttonStyles}
      onClick={() => setSelectedCategory(category)}>{category}</Button>
    )

    return (
      <Grid container justify={'center'}>
        <Grid item lg={9} sm={12} justify="flex-start" style={{ marginTop: '-1rem', marginBottom: 0 }}>
          {chips}
          <Button
            size={'large'}
            style={buttonStyles}
            onClick={() => setSelectedCategory(undefined)}>{'Clear'}</Button>
        </Grid>
      </Grid>
    )
  };

  return (
    <>
      <Menu />
      <div style={{ margin: `3rem auto`, padding: `0 1rem` }}>
        {renderFilterChips()}
            <Cards details={details.filter(detail => detail.categories.includes(selectedCategory) || selectedCategory === undefined)} />
      </div>
      <div style={{ margin: `3rem auto`, padding: `0 1rem` }}>
        <SocialMedia />
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
            categories
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
