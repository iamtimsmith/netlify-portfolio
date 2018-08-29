import React from "react";
import "./index.scss";

export default ({ data }) => (
  <div className="container" id="blog">
    <h1>Blog</h1>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li>{node.frontmatter.title}</li>
      ))}
    </ul>
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
