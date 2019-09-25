import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = styled.header`
  background: #fff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: 2;

  section {
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.25s;
  }

  a.logo {
    color: #007d92;
    text-decoration: none;
    transition: all 0.25s;
    font-family: "Be Vietnam", sans-serif;
    line-height: 1.25;
    transition: all 0.25s;
    font-weight: 800;
    position: relative;
    top: -2px;
    box-shadow: none;
  }

  nav {
    margin-right: -5px;
    display: flex;
  }

  nav a {
    text-transform: uppercase;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    transition: all 0.25s;
    font-family: "Be Vietnam", sans-serif;
    font-weight: 300;
    padding: 5px 10px;
    border-radius: 5px;
    margin-left: 5px;
    line-height: 1.5;
    box-shadow: none;

    :hover {
      background: rgba(0, 0, 0, 0.02);
      color: rgba(0, 0, 0, 0.9);
    }
  }
`

const Footer = styled.footer`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-family: "Merriweather";
  text-align: center;

  strong {
    font-weight: 900;
  }

  span {
    color: red;
  }
`

const Layout = ({ title, children }) => {
  const [headingFontSize, setHeadingFontSize] = useState("36px")
  const [linkFontSize, setLinkFontSize] = useState("18px")
  const [padding, setPadding] = useState("15px")

  useEffect(() => {
    const onScroll = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setHeadingFontSize("30px")
        setLinkFontSize("16px")
        setPadding("10px")
      } else {
        setHeadingFontSize("36px")
        setLinkFontSize("18px")
        setPadding("15px")
      }
    }
    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <>
      <Header>
        <section style={{ padding }}>
          <Link className="logo" style={{ fontSize: headingFontSize }} to="/">
            {title}
          </Link>
          <nav>
            <Link to="/" style={{ fontSize: linkFontSize }}>
              Home
            </Link>
            <Link to="/sobre" style={{ fontSize: linkFontSize }}>
              Sobre
            </Link>
          </nav>
        </section>
      </Header>
      {children}
      <Footer>
        <strong>01dev rocks!</strong> Escrito com <span>❤</span> desde 2017
      </Footer>
    </>
  )
}

export default Layout
