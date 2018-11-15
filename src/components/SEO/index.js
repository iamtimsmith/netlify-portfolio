import React, { Component } from "react";
import Helmet from "react-helmet";

class SEO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.createDescription = this.createDescription.bind(this);
  }

  componentDidMount() {
    const { post, path, postSEO } = this.props;
    let title = post.title;
    let description = this.createDescription(path.html);
    let image = `https://www.iamtimsmith.com${post.image}`;
    let postURL = `https://www.iamtimsmith.com/blog/${post.path}`;
    console.log(postURL);

    if (postSEO) {
      this.setState({
        title: title,
        description: description,
        image: image,
        slug: postURL
      });
    }
  }

  createDescription(desc) {
    let description = desc.replace(/(<([^>]+)>)/gi, "");
    const arr = description.split(" ");
    description = "";
    for (let i = 0; i < 60; i++) {
      description += `${arr[i]} `;
    }
    description = `${description.trim()}...`;
    return description;
  }

  render() {
    return <p>{this.state.description}</p>;
  }
}
export default SEO;
