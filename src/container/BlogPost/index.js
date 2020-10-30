import React from "react"
import { graphql, Link } from "gatsby"
import { BasePage } from "../../components/BasePage"
import styled from "styled-components/macro"
import dateFormat from "../../utils/dateFormat"
import { Content } from "./Content"
import { Helmet } from "react-helmet-async"

export default function Template({ data, pageContext }) {
  const { markdownRemark } = data
  const { title, date, tags, path } = markdownRemark.frontmatter
  const { html } = markdownRemark
  const { next, prev } = pageContext
  return (
    <BasePage>
      <Helmet>
        <title>{title} | Hack</title>
      </Helmet>
      <PostTitle>
        <Link to={`${path}`}>{title}</Link>
      </PostTitle>
      <Date>{dateFormat(date)}</Date>
      <Content data={html} />
      <Tags>
        <div>
          Tags: {tags && tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
        </div>
      </Tags>
      <Pagination>
        <Page style={{ marginBottom: "1rem" }}>
          {prev && <Link to={prev.frontmatter.path}>Prev Post</Link>}
        </Page>{" "}
        <Page>{next && <Link to={next.frontmatter.path}>Next Post</Link>}</Page>
      </Pagination>
    </BasePage>
  )
}
const PostTitle = styled.div`
  margin-bottom: 0;
  a {
    font-weight: 600;
    text-decoration: none;
    font-size: 2.5rem;
    font-family: "Sans Serif";
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
const Tags = styled.div`
  /* float: right; */
  margin-top: 2rem;
  margin-bottom: 3rem;
  align-self: flex-start;
  flex-direction: column;
  font-style: italic;
`
const Tag = styled.span`
  margin: 0 5px;
  font-weight: 600;
  ::before {
    content: "#";
  }
`
const Pagination = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-content: space-between;
`
const Page = styled.div`
  margin-right: 10px;
  margin-bottom: 7px;
  a {
    text-decoration: none;
    /* font-style: italic; */
    font-weight: 600;
    opacity: 0.7;
    color: black;
    font-size: 16px;
    :hover {
      opacity: 0.8;
    }
  }
`

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date
        tags
        path
      }
    }
  }
`
