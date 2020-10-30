import React from "react"
import { graphql } from "gatsby"
import { HomePage } from "../container/HomePage"

export default function Index({ data }) {
  const { edges } = data.allMarkdownRemark
  return <HomePage data={edges} />
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
