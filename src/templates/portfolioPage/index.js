import React from "react";
import Link from "gatsby-link";
import "./index.scss";

export default class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.workScroll = this.workScroll.bind(this);
  }
  componentDidMount() {
    const page = document.getElementById("portfolioPage");
    window.addEventListener("scroll", this.workScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.workScroll);
  }
  workScroll(e) {
    const top = window.pageYOffset;
    const workContent = document.querySelector(".section:nth-child(2)");
    if (document.body.contains(workContent)) {
      if (top > workContent.offsetTop - 200) {
        workContent.classList.add("display");
      }
    }
  }
  render() {
    const port = this.props.data.markdownRemark;
    return (
      <div
        className="container"
        id="portfolioPage"
        onScroll={this.handleScroll}
      >
        <section className="section has-text-centered">
          {/* Title and tags */}
          <h1 className="is-size-2 post-header">{port.frontmatter.title}</h1>
          <span className="line" />
          <p className="is-size-5 post-tags">{port.frontmatter.tags}</p>

          {/* Description */}
          <div
            id="portContent"
            dangerouslySetInnerHTML={{ __html: port.html }}
          />

          {/* Links to next item and last item */}
          <Link to={port.frontmatter.last} className="is-size-5" id="last">
            Last
          </Link>
          <Link to={port.frontmatter.next} className="is-size-5" id="next">
            Next
          </Link>
        </section>
        <section className="section">
          {/* Mouse scroll animation */}
          <div className="mouse" id="mouse">
            <span className="divide" />
            <span className="wheel" />
          </div>

          <div className="columns">
            <div className="column" id="img1">
              <img
                src={port.frontmatter.fullPage}
                alt={port.frontmatter.name}
              />
            </div>
            <div className="column" id="img2">
              <img
                src={port.frontmatter.thumbOne}
                alt={port.frontmatter.name}
              />
              <img
                src={port.frontmatter.thumbTwo}
                alt={port.frontmatter.name}
              />
            </div>
          </div>
          <div className="columns is-centered">
            <a
              href={port.frontmatter.url}
              className="column button is-large is-one-third"
              target="_blank"
            >
              Visit Site
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export const query = graphql`
  query WorkPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        path
        tags
        fullPage
        thumbOne
        thumbTwo
        last
        next
        url
      }
    }
  }
`;
