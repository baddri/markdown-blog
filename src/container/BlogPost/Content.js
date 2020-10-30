import React, { useEffect } from "react"
import styled from "styled-components/macro"

export function Content({ data }) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/prism/prism.js"
    script.async = true
    document.body.appendChild(script)
    const style = document.createElement("link")
    style.href = "/prism/prism.css"
    style.rel = "stylesheet"
    document.head.appendChild(style)
  }, [])
  return (
    <Wrapper
      className={"line-numbers"}
      dangerouslySetInnerHTML={{ __html: data }}
    ></Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 100%;
  line-height: 1.5;
  p {
    text-align: justify;
  }
  h2 {
    margin-top: 30px;
  }
  ul > li {
    margin: 5px;
    text-decoration: none;
  }
  ol > li {
    margin: 5px;
  }
  code {
    /* color: red; */
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: consolas;
  }
  blockquote {
    opacity: 0.5;
    margin-top: 40px;
    margin-bottom: 40px;
    p {
      font-style: italic;
      font-weight: 500;
      ::before {
        content: '"';
      }
      ::after {
        content: '"';
      }
    }
  }
`
