import React from "react"
import { BasePage } from "../../components/BasePage"
import { Helmet } from "react-helmet-async"
import styled from "styled-components/macro"

export default function NotFound() {
  return (
    <BasePage>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <Error>404</Error>
      <Info>Opps, Looks like you were lost</Info>
    </BasePage>
  )
}

const Error = styled.p`
  font-style: italic;
  font-size: 4rem;
  font-family: "Libre Baskerville";
  margin-bottom: 0;
  margin-top: 0;
`
const Info = styled.p`
  margin-top: 0;
  margin-bottom: 4rem;
  font-style: italic;
  font-size: 2rem;
  font-family: "Libre Baskerville";
  opacity: 0.7;
`
