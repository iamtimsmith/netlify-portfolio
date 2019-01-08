import React from "react";
import SocialShare from "../../components/socialShare";
import "../../templates/blogPost/index.scss";

const BlogPostPreview = ({ entry, widgetFor }) => (
  <div>
    <section
      className="hero is-large"
      style={{
        backgroundImage: `url("${entry.getIn(["data", "image"])}")`
      }}
    >
      <div className="hero-body container" />
    </section>
    <section className="section">
      <div className="container">
        <h1 className="is-size-1">{entry.getIn(["data", "title"])}</h1>
        <div className="columns">
          <div className="column is-narrow">
            <p className="is-size-5">{entry.getIn(["data", "date"])}</p>
          </div>
        </div>

        <hr />
        <br />
        <div id="post-content">{widgetFor("body")}</div>
        <br />
      </div>
      <SocialShare
        url={`https://www.iamtimsmith.com/blog/${entry.getIn([
          "data",
          "path"
        ])}`}
        image={`https://www.iamtimsmith.com/${entry.getIn(["data", "image"])}`}
        title={entry.getIn(["data", "title"])}
      />
    </section>
  </div>
);

export default BlogPostPreview;
