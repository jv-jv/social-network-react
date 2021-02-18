import React from "react"
import { Container, Title, Subtitle, StyledLink } from "./style"

export default function Landing({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

Landing.Title = function LandingTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>
}

Landing.Subtitle = function LandingSubtitle({ children, ...props }) {
  return <Subtitle {...props}>{children}</Subtitle>
}

Landing.Link = function LandingStyledLink({ children, ...props }) {
  return <StyledLink {...props}>{children}</StyledLink>
}
