import React from "react";
import Item from "../../components/portfolioitems";
import "./index.scss";

export default ({ data }) => {
  return (
    <section className="portfolio-items has-margin-top columns is-multiline">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Item
          key={node.frontmatter.title}
          name={node.frontmatter.title}
          tags={node.frontmatter.tags}
          url={node.frontmatter.path}
          img={node.frontmatter.thumbOne}
        />
      ))}
    </section>
  );
};

export const workQuery = graphql`
  query workQuery {
    allMarkdownRemark(
      sort:{fields:[frontmatter___priority], order:ASC},
      filter:{fileAbsolutePath: {regex: "/work/.*\\.md$/"}}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            tags
            thumbOne
            thumbTwo
          }
        }
      }
    }
  }
`;
