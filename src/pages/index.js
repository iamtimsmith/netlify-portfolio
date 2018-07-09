import React from "react";
import './index.scss';

// Components
import Item from '../components/portfolioitems/';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='is-home'>
        <section className='section hero is-large has-text-centered'>
          <div className='text'>
            <h1 className='is-size-1'>Freelance Web Developer.</h1>
            <p className='is-size-3'>Person.</p>
            <a href='#contact' className='button is-medium'>Hire Me!</a>
          </div>
        </section>
        <section className='portfolio-items columns is-multiline'>
          {this.props.data.allMarkdownRemark.edges.map( ({node}) => (
            <Item 
              name={node.frontmatter.title} 
              tags={node.frontmatter.tags} 
              url={node.frontmatter.path} 
              img={node.frontmatter.thumbOne} />
          ))}
        </section>
      </div>
    )
  }
}

export const query = graphql`
  query homeQuery {
    allMarkdownRemark(sort:{fields:[frontmatter___priority], order:ASC}) {
      edges {
        node {
          frontmatter {
            title
            path
            tags
            thumbOne
            thumbTwo
          }
        }
      }
    }
  }
`