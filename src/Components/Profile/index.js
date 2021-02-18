import React from "react"

import { MdPerson } from "react-icons/md"
import {
  Container,
  Background,
  Group,
  Name,
  Avatar,
  Friends,
  Icon,
  Button,
} from "./style"

export default function Profile({ children, ...props }) {
  return (
    <Container {...props}>
      <Background />
      {children}
    </Container>
  )
}

Profile.Name = function ProfileName({ children, ...props }) {
  return <Name {...props}>{children}</Name>
}

Profile.Group = function ProfileGroup({ children, ...props }) {
  return <Group {...props}>{children}</Group>
}

Profile.Avatar = function ProfileAvatar(props) {
  return <Avatar {...props} />
}

Profile.Friends = function ProfileFriends({ children, ...props }) {
  return (
    <Friends {...props}>
      <Icon>
        <MdPerson />
      </Icon>
      {children}
    </Friends>
  )
}

Profile.Button = function ProfileButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>
}
