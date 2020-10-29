import React from "react"
import { graphql, Link } from "gatsby"
import { BasePage } from "../../components/BasePage"
import styled from "styled-components/macro"
import dateFormat from "../../utils/dateFormat"
import { Content } from "./Content"

export default function Template({ data, pageContext }) {
  const { markdownRemark } = data
  const { title, date } = markdownRemark.frontmatter
  const { html } = markdownRemark
  const { next, prev } = pageContext
  return (
    <BasePage>
      <PostTitle>
        <Link to={""}>{title}</Link>
      </PostTitle>
      <Date>{dateFormat(date)}</Date>
      <Content data={html}></Content>
      <div style={{ marginBottom: "1rem" }}>
        {prev && <Link to={prev.frontmatter.path}>prev</Link>}
      </div>
      <div>{next && <Link to={next.frontmatter.path}>next</Link>}</div>
    </BasePage>
  )
}
const PostTitle = styled.div`
  margin-bottom: 0;
  a {
    font-weight: 600;
    text-decoration: none;
    font-size: 2.5rem;
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

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
