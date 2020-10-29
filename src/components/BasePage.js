import React, { useEffect, useRef } from "react"
import { GlobalStyle } from "../globalStyle"
import { HelmetProvider, Helmet } from "react-helmet-async"
import styled from "styled-components/macro"
import { Link } from "gatsby"
import { Header } from "./Header"

export function BasePage({ children }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My blog</title>
      </Helmet>
      <Container>
        <Wrapper>
          <Header />
          {children}
          <Footer>
            <Divider />
            <Description>Blog description</Description>
            <div>
              <FooterLink>
                <Link to={"/"}>Home</Link>{" "}
              </FooterLink>
              <FooterLink>
                <Link to={"/about"}>About</Link>{" "}
              </FooterLink>
              <FooterLink>
                <Link to={"/contact"}>Contact</Link>{" "}
              </FooterLink>
            </div>
            <Description>@2020</Description>
          </Footer>
        </Wrapper>
      </Container>
      <GlobalStyle />
    </HelmetProvider>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 40rem;
  max-width: 40rem;
  padding: 0 30px;
  @media (max-width: 700px) {
    min-width: 90%;
    max-width: 90%;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: center;
`
export const Divider = styled.hr`
  border-top: 1px solid black;
  width: 100%;
  margin-top: 0px;
  opacity: 0.2;
  margin-bottom: 0.6rem;
`
const Footer = styled.footer`
  bottom: 0;
  text-align: center;
  display: flex;
  width: 100%;
  margin-top: 0rem;
  padding-top: 0rem;
  flex-direction: column;
  align-items: center;
`
const Description = styled.p`
  font-size: 14px;
`
const FooterLink = styled.span`
  a {
    font-size: 14px;
    margin: 0 5px;
    color: black;
    text-decoration: none;
  }
`
