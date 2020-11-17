import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStaticQuery, graphql } from "gatsby"
import { SummaryCard } from '../card';

export const BlogSummaris = () => {
    const data = useStaticQuery(graphql`query {
    allMarkdownRemark {
        totalCount
        edges {
            node {
                id
                frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY")
                    summaryImage
                    category
                    author
                    isPublished
                    featuredImage {
                        childImageSharp {
                          fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                    }
                }
                fields {
                    slug
                }
                excerpt
            }
        }
    }
}
`)

    return (
        <Grid container justify='center'>
            {data.allMarkdownRemark.edges.map((edge, index) => {
                const { summaryImage, title, date, category, isPublished } = edge.node.frontmatter;
                const { excerpt, fields } = edge.node;

                return (
                    <Grid
                        container
                        direction='row'
                        item
                        xs={12}
                        sm={10}
                        md={8}
                        lg={4}
                        key={index}
                    >
                        <SummaryCard
                            summaryImage={summaryImage}
                            title={title}
                            date={date}
                            category={category}
                            excerpt={excerpt}
                            slug={fields.slug}
                            isPublished={isPublished}
                        />
                    </Grid>
                )
            })}
        </Grid>
    )
}
