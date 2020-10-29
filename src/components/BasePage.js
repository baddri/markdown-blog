import React, { useEffect, useRef } from "react"
import { GlobalStyle } from "../globalStyle"
import { HelmetProvider, Helmet } from "react-helmet-async"
import styled from "styled-components/macro"
import { Header } from "./Header"

export function BasePage({ children }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My blog</title>
        <link rel="stylesheet" href="/prism/prism.css" />
        <script src="/prism/prism.js"></script>
      </Helmet>
      <Container>
        <Wrapper>
          <Header />
          {children}
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
