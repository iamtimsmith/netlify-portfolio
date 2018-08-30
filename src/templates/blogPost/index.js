import React from "react";
import "./index.scss";

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.data.markdownRemark
    };
  }
  render() {
    return (
      <div id="blog-post">
        <section
          className="hero is-large"
          style={{
            backgroundImage: `url("${this.state.post.frontmatter.image}")`
          }}
        >
          <div className="hero-body container" />
        </section>
        <section className="section">
          <div className="container">
            <h1 className="is-size-1">{this.state.post.frontmatter.title}</h1>
            <p className="is-size-4">{this.state.post.frontmatter.date}</p>
            <div
              id="post-content"
              dangerouslySetInnerHTML={{ __html: this.state.post.html }}
            />
          </div>
        </section>
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
        image
        tags
      }
    }
  }
`;
