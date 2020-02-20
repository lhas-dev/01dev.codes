import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"
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

  section img {
    margin: 0 auto;
    display: block;
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

  div.newsletter {
    width: 100%;
    padding: 50px;
    margin-bottom: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;

    h2 {
      color: #007d92;
      margin: 0;
      margin-bottom: 10px;
    }

    p {
      font-weight: 300;
    }

    input {
      height: 50px;
      padding-left: 10px;
      padding-right: 10px;
    }

    button {
      background: #007d92;
      color: #fff;
      border: none;
      height: 50px;
      margin-left: 5px;
      padding-left: 20px;
      padding-right: 20px;
      font-weight: 300;
      cursor: pointer;
    }

    p.spam {
      margin-top: 10px;
      margin-bottom: 0;
      color: rgba(0, 0, 0, 0.2);
    }
  }
`

const Newsletter = () => {
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = event => {
    event.preventDefault()

    addToMailchimp(email)
    setSent(true)
  }

  return (
    <div className="newsletter">
      {sent && <h2>Muito obrigado!</h2>}
      {sent && <p>Você receberá novidades direto na sua caixa de entrada.</p>}
      {!sent && <h2>Receba novidades por e-mail</h2>}
      {!sent && (
        <p>Você será sempre o primeiro a saber as novidades da 01dev</p>
      )}
      {!sent && (
        <form onSubmit={handleNewsletterSubmit}>
          <input
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="email"
            placeholder="Seu melhor e-mail aqui"
          />
          <button type="submit">Inscreva-se já!</button>
        </form>
      )}
      <p className="spam">Não vamos enviar spam! É uma promessa.</p>
    </div>
  )
}

class BlogPostTemplate extends React.Component {
  state = { email: "" }

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
          <Newsletter />
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
