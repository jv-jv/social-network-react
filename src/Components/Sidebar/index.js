import React from "react"
import { Container, Side, Top, Content, Item, Title, Text, Icon } from "./style"

export default function Sidebar({ children, ...props }) {
  return (
    <Container>
      <Top />
      <Side />
      <Content {...props}>{children}</Content>
    </Container>
  )
}

Sidebar.Item = function SidebarItem({ children, ...props }) {
  return <Item {...props}>{children}</Item>
}

Sidebar.Title = function SidebarTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>
}

Sidebar.Text = function SidebarText({ children, ...props }) {
  return <Text {...props}>{children}</Text>
}

Sidebar.Icon = function SidebarIcon({ children, ...props }) {
  return <Icon {...props}>{children}</Icon>
}
