import React from "react"
import { Container, Input, Upload, Button, Text } from "./style"

export default function ProfileEditor({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

ProfileEditor.Input = function ProfileEditorInput(props) {
  return <Input {...props} />
}

ProfileEditor.Upload = function ProfileEditorUpload(props) {
  return <Upload {...props} type="file" />
}

ProfileEditor.Button = function ProfileEditorButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>
}

ProfileEditor.Text = function ProfileEditorText({ children, ...props }) {
  return <Text {...props}>{children}</Text>
}
