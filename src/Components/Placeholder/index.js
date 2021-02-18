import React from "react"
import { Container, Text, StyledLink } from "./style"

export default function Placeholder({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

Placeholder.Text = function PlaceholderText({ children, ...props }) {
  return <Text {...props}>{children}</Text>
}

Placeholder.Link = function PlaceholderLink({ children, ...props }) {
  return <StyledLink {...props}>{children}</StyledLink>
}
