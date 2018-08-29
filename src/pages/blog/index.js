import React from "react";
import "./index.scss";

import Summary from "../../components/postSummary";

export default ({ data }) => (
  <div className="container" id="blog">
    <section className="section">
      <h1 className="is-size-2">Blog</h1>
      <div className="columns is-multiline">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="column is-4" key={node.id}>
            <Summary
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              path={node.frontmatter.path}
              tags={["JavaScript", "React"]}
            />
          </div>
        ))}
      </div>
    </section>
  </div>
);

export const query = graphql`
  query blogQuery {
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
           }
         }
       }
     }
 }
`;
