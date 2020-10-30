import styled from "styled-components/macro"
import React from "react"
import { Link } from "gatsby"

export function Footer() {
  const d = new Date()
  return (
    <Wrapper>
      <Divider />
      <Description>Blog description</Description>
      <div>
        <FooterLink>
          <Link to={"/"}>Home</Link>{" "}
        </FooterLink>
        <FooterLink>
          <a href={"https://github.com/baddri"}>About</a>{" "}
        </FooterLink>
        <FooterLink>
          <a href={"mailto:badri.ula@gmail.com"}>Contact</a>{" "}
        </FooterLink>
      </div>
      <Description>{`@${d.getFullYear()}`}</Description>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  /* position: sticky; */
  bottom: 0;
  text-align: center;
  display: flex;
  width: 100%;
  margin-top: 0rem;
  padding-top: 0rem;
  flex-direction: column;
  align-items: center;
`
const Description = styled.p`
  font-size: 14px;
`
const FooterLink = styled.span`
  a {
    font-size: 14px;
    margin: 0 5px;
    color: black;
    text-decoration: none;
  }
`
const Divider = styled.hr`
  border-top: 1px solid black;
  width: 100%;
  margin-top: 0px;
  opacity: 0.2;
  margin-bottom: 0.6rem;
`
