import React from "react"
import {
  Container,
  Input,
  Button,
  Title,
  Error,
  StyledLink,
  Text,
} from "./style"

export default function OptForm({ children, ...props }) {
  return <Container {...props}> {children}</Container>
}

OptForm.Input = function OptFormInput({ ...props }) {
  return <Input {...props} />
}

OptForm.Button = function OptFormButton({ ...props }) {
  return <Button {...props}></Button>
}

OptForm.Title = function OptFormTitle({ ...props }) {
  return <Title {...props}></Title>
}

OptForm.Error = function OptFormError({ ...props }) {
  return <Error {...props}></Error>
}

OptForm.Text = function OptFormText({ ...props }) {
  return <Text {...props}></Text>
}

OptForm.Link = function OptFormLink({ ...props }) {
  return <StyledLink {...props}></StyledLink>
}
