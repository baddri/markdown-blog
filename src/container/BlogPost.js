import React from "react"
import { graphql, Link } from "gatsby"
import { BasePage } from "../components/BasePage"

export default function Template({ data, pageContext }) {
  const { markdownRemark } = data
  const { title } = markdownRemark.frontmatter
  const { html } = markdownRemark
  const { next, prev } = pageContext
  return (
    <BasePage>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <div style={{ marginBottom: "1rem" }}>
        {prev && <Link to={prev.frontmatter.path}>prev</Link>}
      </div>
      <div>{next && <Link to={next.frontmatter.path}>next</Link>}</div>
    </BasePage>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
