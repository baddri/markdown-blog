import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components/macro"
import {Divider} from './Divider'

function TitleAndDescription({ data }) {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Divider/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* font-family: "Arial"; */
`
const Title = styled.p`
  margin-bottom: 0;
  margin-top: 2rem;
  font-size: 5rem;
  font-family: 'Sans Serif';
  font-weight: 900;
  /* font-style: italic; */
  opacity: 0.8;
`
const Description = styled.p`
  margin-top: 0;
  margin-bottom: 7px;
  opacity: 0.6;
  font-family: "Libre Baskerville";
  font-style: italic;
  font-size: 1.1rem;
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
