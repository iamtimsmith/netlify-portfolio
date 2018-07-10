import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './index.scss';

// Components
import Item from '../components/portfolioitems/';
import Contact from '../components/contactform/';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className='section hero is-large has-text-centered'>
          <div className='text'>
            <h1 className='is-size-1'>Freelance Web Developer.</h1>
            <p className='is-size-3'>Person.</p>
            <AnchorLink href='#contact' className='button is-medium scroll' data-speed='1000'>Hire Me!</AnchorLink>
          </div>
        </section>
        <section className='portfolio-items columns is-multiline'>
          {this.props.data.allMarkdownRemark.edges.map( ({node}) => (
            <Item
              key={node.frontmatter.title}
              name={node.frontmatter.title} 
              tags={node.frontmatter.tags}                    
              url={node.frontmatter.path} 
              img={node.frontmatter.thumbOne} />
          ))}
        </section>
        <section className='section'>
          <div className='columns is-centered'>
            <div className='column is-6'>
              <Contact buttonText='Hire Me!' />
            </div>
          </div>
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