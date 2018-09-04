import React from "react";
import "./404.scss";

import Summary from "../components/postSummary";

export default ({ data }) => (
  <div id="is-404">
    <section className="section">
      <div className="container has-text-centered">
        <p className="is-size-2">Oops, that page doesn't exist!</p>
        <p className="content-404">
          I'm afraid the page you're looking for isn't available. Below are some
          pages that are available though...
        </p>
        <div className="columns">
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            if (index <= 2) {
              return (
                <div className="column is-4" key={node.frontmatter.path}>
                  <Summary
                    title={node.frontmatter.title}
                    excerpt={node.excerpt}
                    path={node.frontmatter.path}
                    tags={node.frontmatter.tags.split(" ")}
                    thumb={node.frontmatter.image}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  </div>
);

export const query = graphql`
  query blogQuery404 {
    allMarkdownRemark(
     sort: { order: ASC, fields: [frontmatter___date]},
     filter: {fileAbsolutePath: {regex: "/blog/.*\\.md$/"}}
   ) {
       edges {
         node {
           excerpt(pruneLength: 250)
           id
           frontmatter {
             title
             date(formatString: "MMMM DD, YYYY")
             path
             image
             tags
           }
         }
       }
     }
 }
`;
