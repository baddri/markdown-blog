import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components/macro"

function TitleAndDescription({ data }) {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* font-family: "Arial"; */
`
const Title = styled.h2`
  margin-bottom: 0;
`
const Description = styled.p`
  margin-top: 0;
  opacity: 0.5;
`

export function Header() {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}
