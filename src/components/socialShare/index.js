import React from "react";
import "./index.scss";

class SocialShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shareLinks: [
        {
          url: `https://www.facebook.com/sharer/sharer.php?u=${this.props.url}`,
          website: "facebook"
        },
        {
          url: `https://twitter.com/home?status=${this.props.url}`,
          website: "twitter"
        },
        {
          url: `https://plus.google.com/share?url=${this.props.url}`,
          website: "google-plus"
        },
        {
          url: `https://www.linkedin.com/shareArticle?mini=true&url=${
            this.props.url
          }`,
          website: "linkedin"
        },
        {
          url: `mailto:?&body=Check%20this%20article%20out!%0A%0A${
            this.props.url
          }`,
          website: "envelope"
        }
      ]
    };
    this.openWindow = this.openWindow.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", e => {
      const top = window.pageYOffset;
      const content = document.querySelector("#post-content").offsetTop + 200;
      const comments = document.querySelector("#post-comments").offsetTop - 150;
      const socialShare = document.querySelector("#socialShare");
      console.log(comments);
      if (top > content && top < comments) {
        socialShare.classList.add("is-shareable");
      } else {
        socialShare.classList.remove("is-shareable");
      }
    });
  }

  openWindow(url) {
    window.open(url, "popup", "width=600,height=600");
    return false;
  }

  render() {
    return (
      <div id="socialShare">
        <div className="columns is-mobile">
          {this.state.shareLinks.map(link => (
            <a
              key={link.website}
              className={`column button is-${link.website}`}
              onClick={() => this.openWindow(link.url)}
            >
              <span className={`fa fa-${link.website} fa-2x`} />
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default SocialShare;
