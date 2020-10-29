import React from "react"
import { GlobalStyle } from "../globalStyle"
import { HelmetProvider, Helmet } from "react-helmet-async"
import styled from "styled-components/macro"

export function BasePage({ children }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My blog</title>
      </Helmet>
      {children}
      <GlobalStyle />
    </HelmetProvider>
  )
}
