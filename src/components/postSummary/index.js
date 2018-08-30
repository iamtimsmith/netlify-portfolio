import React from "react";
import Link from "gatsby-link";
import "./index.scss";

export default props => (
  <Link to={`/blog/${props.path}`} class="post-card">
    <article className="card">
      <div className="card-image">
        <figure className="image">
          <img src={props.thumb} alt={props.title} />
        </figure>
      </div>
      <div className="card-content">
        <h4>{props.title}</h4>
        {props.tags.map(tag => (
          <span className="tag is-light">{tag}</span>
        ))}
      </div>
    </article>
  </Link>
);
