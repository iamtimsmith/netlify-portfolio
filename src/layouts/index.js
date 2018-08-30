import React, { Component } from "react";
import Helmet from "react-helmet";
require("font-awesome/css/font-awesome.css");
import "bulma";
import "./index.scss";

//Components
import Header from "../components/header/";
import Footer from "../components/footer/";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteTitle: "Tim Smith",
      siteNav: [
        { label: "About", href: "/about" },
        { label: "Work", href: "/work" },
        { label: "Blog", href: "/blog" }
      ],
      socialMedia: [
        { icon: "codepen", href: "http://codepen.io/iamtimsmith/" },
        {
          icon: "linkedin",
          href: "https://www.linkedin.com/in/tim-smith-1a651aa0"
        },
        { icon: "twitter", href: "https://twitter.com/iam_timsmith" },
        { icon: "github", href: "https://github.com/iamtimsmith" },
        { icon: "devto", href: "https://dev.to/iam_timsmith" }
      ]
    };
  }
  componentDidMount() {
    window.onscroll = () => {
      var top = window.pageYOffset;
      var navbar = document.querySelector(".is-home .navbar");
      if (this.props.location.pathname == "/") {
        if (top < 650) {
          navbar.classList.add("clear");
        } else {
          navbar.classList.remove("clear");
        }
      }
    };
  }

  render() {
    const isHome = this.props.location.pathname == "/" ? "is-home" : "is-page";
    return (
      <div className={isHome}>
        <Helmet>
          <title>{this.state.siteTitle}</title>
          <meta name="google-site-verification" content="q0cqZMFOFIpPzXHCvButtaaA27KQv3I3oVuGQX7Vd10" />
        </Helmet>
        
        <div className={`content `}>
          <Header
            title={this.state.siteTitle}
            nav={this.state.siteNav}
            social={this.state.socialMedia}
          />

          {this.props.children({
            ...this.props,
            title: this.state.siteTitle
          })}

          <Footer
            title={this.state.siteTitle}
            nav={this.state.siteNav}
            social={this.state.socialMedia}
          />
        </div>
      </div>
    );
  }
}
