import React from "react"
import { graphql, Link } from "gatsby"
import { BasePage } from "../components/BasePage"
import { HomePage } from "../container/HomePage"

export default function Index({ data }) {
  const { edges } = data.allMarkdownRemark
  return (
    <BasePage>
      <HomePage data={edges} />
    </BasePage>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            tags
          }
          html
        }
      }
    }
  }
`
