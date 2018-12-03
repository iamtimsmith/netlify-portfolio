import React from "react";
import { DiscussionEmbed, CommentCount } from "disqus-react";
import Helmet from "react-helmet";
import SocialShare from "../../components/socialShare";
import SEO from "../../components/SEO";
import "./index.scss";

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.data.markdownRemark
    };
  }
  render() {
    const disqusShortname = "iamtimsmith";
    const disqusConfig = {
      url: `https://www.iamtimsmith.com/blog/${
        this.state.post.frontmatter.path
      }`,
      identifier: this.state.post.frontmatter.path,
      title: this.state.post.frontmatter.title
    };
    return (
      <div id="blog-post">
        <Helmet>
          <title>{this.state.post.frontmatter.title} | Tim Smith</title>
          <meta description="Hi, I'm a freelance front-end developer from the Quad Cities that you can trust. To hire me, just drop me a line!" />
          <meta
            property="og:url"
            content={`https://www.iamtimsmith.com/blog/${
              this.state.post.frontmatter.path
            }`}
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content={this.state.post.frontmatter.title}
          />
          <meta
            property="og:image:secure_url"
            content={`https://www.iamtimsmith.com/blog/${
              this.state.post.frontmatter.path
            }`}
          />
        </Helmet>
        {/* <SEO
          post={this.state.post.frontmatter}
          path={this.state.post}
          postSEO
        /> */}
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
            <div className="columns">
              <div className="column is-narrow">
                <p className="is-size-5">{this.state.post.frontmatter.date}</p>
              </div>
            </div>

            <hr />
            <br />
            <div
              id="post-content"
              dangerouslySetInnerHTML={{ __html: this.state.post.html }}
            />
            <br />
            <div id="post-comments">
              <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              />
            </div>
          </div>
          <SocialShare
            url={`https://www.iamtimsmith.com/blog/${
              this.state.post.frontmatter.path
            }`}
            image={`https://www.iamtimsmith.com/${
              this.state.post.frontmatter.image
            }`}
            title={this.state.post.frontmatter.title}
          />
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
