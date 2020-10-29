import React, { useEffect, useRef } from "react"
import styled from "styled-components/macro"

export function Content({ data }) {
  return <Wrapper dangerouslySetInnerHTML={{ __html: data }}></Wrapper>
}

const Wrapper = styled.div`
  line-height: 1.5;
  p {
    text-align: justify;
  }
  h2 {
    margin-top: 30px;
  }
  pre {
    background-color: #f6f6f6;
    padding: 20px;
    border-radius: 5px;
  }
  ul > li {
    margin: 5px;
  }
  code {
    /* color: red; */
    font-family: consolas;
  }
`
