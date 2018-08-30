import React from "react";
import "./index.scss";

import Summary from "../../components/postSummary";

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.data.allMarkdownRemark.edges,
      posts: []
    };
    this.searchPosts = this.searchPosts.bind(this);
  }

  componentDidMount() {
    this.setState({
      posts: this.props.data.allMarkdownRemark.edges
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      posts: nextProps.data.allMarkdownRemark.edges
    });
  }

  searchPosts(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.data.allMarkdownRemark.edges;
      newList = currentList.filter(({ node }) => {
        const lcTitle = node.frontmatter.title.toLowerCase();
        const lcTags = node.frontmatter.tags.toLowerCase();
        const filter = e.target.value.toLowerCase();
        let bool = false;
        if (lcTitle.includes(filter) || lcTags.includes(filter)) {
          bool = true;
        }
        return bool;
      });
    } else {
      newList = this.props.data.allMarkdownRemark.edges;
    }
    this.setState({
      posts: newList
    });
  }

  render() {
    return (
      <div className="container" id="blog">
        <section className="section">
          <h1 className="is-size-2">Blog</h1>
          <form className="form">
            <div className="field">
              <input
                className="input"
                type="text"
                name="search"
                id="search-bar"
                placeholder="Search for something..."
                onChange={this.searchPosts}
              />
            </div>
          </form>
          <div className="columns is-multiline">
            {this.state.posts.map(({ node }) => (
              <div className="column is-4 posts" key={node.id}>
                <Summary
                  title={node.frontmatter.title}
                  excerpt={node.excerpt}
                  path={node.frontmatter.path}
                  tags={node.frontmatter.tags.split(" ")}
                  thumb={node.frontmatter.image}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

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
             image
             tags
           }
         }
       }
     }
 }
`;
