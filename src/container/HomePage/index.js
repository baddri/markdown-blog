import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components/macro"
import { Header } from "../../components/Header"
import dateFormat from "../../utils/dateFormat"
import { BasePage } from "../../components/BasePage"

export function HomePage({ data }) {
  return (
    <BasePage>
      {data.map(edge => {
        const { frontmatter } = edge.node
        return (
          <>
            <Post>
              <Link to={frontmatter.path} key={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </Post>
            <Date>{dateFormat(frontmatter.date)}</Date>
          </>
        )
      })}
    </BasePage>
  )
}

const Post = styled.div`
  margin-bottom: 0;
  a {
    text-decoration: none;
    font-size: 2rem;
    font-family: "Fira Sans";
    color: black;
    opacity: 0.9;
  }
`
const Date = styled.p`
  margin-top: 5px;
  font-family: "Libre Baskerville";
  margin-bottom: 2rem;
  font-style: italic;
  color: black;
  opacity: 0.5;
  font-size: 0.9rem;
`
