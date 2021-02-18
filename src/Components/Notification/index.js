import React from "react"
import { Container, Name, Text, Time } from "./style"

export default function Notification({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

Notification.Text = function NotificationText({ children, ...props }) {
  return <Text {...props}>{children}</Text>
}

Notification.Name = function NotificationName({ children, ...props }) {
  return <Name {...props}>{children}</Name>
}
Notification.Time = function NotificationTime({ children, ...props }) {
  return <Time {...props}>{children}</Time>
}
