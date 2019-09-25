import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const Content = styled.main`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding-top: 120px;

  .cover {
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center center;
  }

  h3 {
    margin-top: 20px;

    a {
      font-family: "Merriweather";
      color: rgba(0, 0, 0, 0.84);
    }
  }

  article {
    margin-bottom: 30px;
  }

  p {
    font-weight: 300;
    line-height: 1.75;
    font-size: 18px;
  }
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Posts" />
        <Content>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    <div
                      className="cover"
                      style={{
                        backgroundImage: `url(${node.frontmatter.cover})`,
                      }}
                    />
                  </Link>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            )
          })}
        </Content>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
            cover
            description
          }
        }
      }
    }
  }
`
