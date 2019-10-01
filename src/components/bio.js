/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

const Content = styled.div`
  display: flex;
  align-items: center;
  .written-by {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0;
    font-size: 15px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.54);
    font-family: "Merriweather";
  }

  .name {
    letter-spacing: 0.05em;
    margin: 0;
    font-size: 20px;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.9);
    font-family: "Merriweather";
  }

  .description {
    letter-spacing: 0.05em;
    margin: 0;
    font-size: 12px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.9);
    line-height: 2.25;
    font-family: "Merriweather";
  }

  a {
    font-size: 14px;
    margin-right: 10px;
  }
`

const Avatar = styled.img`
  border-radius: 100px;
  width: 80px;
  height: 80px;
  margin: 0;
  margin-right: 10px;
`

const Bio = () => {
  return (
    <Content>
      <Avatar src="/avatar.jpg" />
      <div>
        <p className="written-by">Escrito por</p>
        <p className="name">Luiz Almeida</p>
        <p className="description">
          Especialista em front-end, trabalha com desenvolvimento há 10 anos.{" "}
          Apaixonado por escrever e participar de desafios que envolvem
          tecnologia, vive atualmente em Porto Alegre.
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/luizhrqas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          <a
            href="https://www.instagram.com/lhas01dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
      </div>
    </Content>
  )
}

export default Bio
