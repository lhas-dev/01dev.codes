import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Disqus } from "gatsby-plugin-disqus"

const Content = styled.main`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding-top: 120px;
  padding-left: 15px;
  padding-right: 15px;

  .cover {
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center center;
  }

  h1 {
    margin-top: 20px;
    font-weight: 900;
    font-size: 40px;
    line-height: 1.5;
    font-family: "Merriweather";
  }

  article {
    margin-bottom: 30px;
  }

  small {
    font-family: "Merriweather";
    font-size: 18px;
    line-height: 1.5;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.75);
    margin-top: 10px;
    margin-bottom: 50px;
  }

  section p,
  section li,
  section blockquote {
    font-family: "Merriweather";
    font-size: 18px;
    line-height: 2;
    font-weight: 300;
  }

  section p:first-child::first-letter {
    color: rgba(0, 0, 0, 0.8);
    font-size: 320%;
    line-height: 30px;
    font-weight: 800;
    margin-right: 5px;
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const disqusConfig = {
      url: `${this.props.data.site.siteMetadata.siteUrl +
        this.props.location.pathname}`,
      identifier: post.id,
      title: post.title,
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          cover={post.frontmatter.cover}
        />
        <Content>
          <article>
            <div
              className="cover"
              style={{
                backgroundImage: `url(${post.frontmatter.cover})`,
              }}
            />
            <header>
              <h1
                style={{
                  marginBottom: 0,
                }}
              >
                {post.frontmatter.title}
              </h1>
              <small
                style={{
                  display: `block`,
                }}
              >
                {post.frontmatter.date} • Escrito por{" "}
                {this.props.data.site.siteMetadata.author}
              </small>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr style={{}} />
            <nav>
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
            <footer>
              <Bio />
            </footer>
          </article>
          <Disqus config={disqusConfig} />
        </Content>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        cover
        date(formatString: "DD MMM")
        description
      }
    }
  }
`
