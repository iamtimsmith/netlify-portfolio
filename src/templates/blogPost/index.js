import React from "react";
import "./index.scss";

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const post = this.props.data.markdownRemark;
    return (
      <div className="container" id="blog-post">
        <h1 className="is-size-3">{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <hr />
        <div
          id="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
      }
    }
  }
`;
