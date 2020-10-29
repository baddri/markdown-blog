import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components/macro"
import { Header } from "./Header"

export function HomePage({ data }) {
  return (
    <Wrapper>
      <Header />
      {data.map(edge => {
        const { frontmatter } = edge.node
        return (
          <Link to={frontmatter.path} key={frontmatter.path}>
            <Post>{frontmatter.title}</Post>
          </Link>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Post = styled.div`
  margin-bottom: 1rem;
`
