import React from 'react';
import Link from 'gatsby-link';
import './index.scss';

export default class PortfolioPage extends React.Component { 
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    const page = document.getElementById('portfolioPage');
    page.addEventListener('scroll', this.handleScroll, true);
  }
  handleScroll(e) {
    const top = document.getElementById('portfolioPage').pageYOffset;
    const content = document.querySelector('.section:nth-child(2)');
    if (top >= content.offsetTop - 200) {
      content.classList.add('display');
    }
  }
  render() {
    const port = this.props.data.markdownRemark;
    return (
      <div className='container' id='portfolioPage' onScroll={this.handleScroll}>
        <section className="section has-text-centered">
          {/* Title and tags */}
          <h1 className="is-size-1 post-header">{ port.frontmatter.title }</h1>
          <span className="line"></span>
          <p className='is-size-5 post-tags'>{port.frontmatter.tags}</p>

          {/* Description */}
          <div  id='portContent' dangerouslySetInnerHTML={{ __html: port.html }} />
          
          {/* Links to next item and last item */}
          <Link to={port.frontmatter.last} className='is-size-5' id='last'>Last</Link>
          <Link to={port.frontmatter.next} className='is-size-5' id='next'>Next</Link>
        </section>
        <section className="section">
          {/* Mouse scroll animation */}
          <div className="mouse" id='mouse'>
            <span className="divide"></span>
            <span className="wheel"></span>
          </div>

          <div className="columns">
            <div className="column" id="img1">
              <img src={ port.frontmatter.fullPage } alt={port.frontmatter.name} />
            </div>
            <div className="column" id='img2'>
              <img src={port.frontmatter.thumbOne} alt={port.frontmatter.name}/>
              <img src={port.frontmatter.thumbTwo} alt={port.frontmatter.name}/>
            </div>
          </div>
          <div className="columns is-centered">
            <a href={port.frontmatter.url} className='column button is-large is-one-third' target='_blank'>Visit Site</a>
          </div>
        </section>
      </div>
    )
  }
}

window.onscroll = () => {
  const top = window.pageYOffset;
  const content = document.querySelector('.section:nth-child(2)').offsetTop;
  if (top >= content) {
    console.log(content);
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
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