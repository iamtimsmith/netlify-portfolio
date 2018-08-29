import React from "react";
import "./index.scss";

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const post = this.props.data.markdownRemark;
    return (
      <div id="blog-post">
        <section
          className="hero is-large"
          style={{ backgroundImage: "url('https://placeimg.com/800/600')" }}
        >
          <div className="hero-body container">
            <h1 className="title has-text-white">{post.frontmatter.title}</h1>
            <p className="is-size-4 has-text-white">{post.frontmatter.date}</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div
              id="post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
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
      }
    }
  }
`;
