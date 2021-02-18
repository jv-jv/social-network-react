import React, { useState } from "react"

import { MdThumbUp } from "react-icons/md"
import {
  Container,
  Body,
  Avatar,
  Name,
  Time,
  Text,
  Group,
  Image,
  Video,
  Options,
  Option,
  OptionsBtn,
  LikesCounter,
  CommentsCounter,
} from "./style"

export default function Post({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

Post.Body = function PostBody({ children, ...props }) {
  return <Body {...props}>{children}</Body>
}

Post.Avatar = function PostAvatar(props) {
  return <Avatar {...props} />
}

Post.Name = function PostName({ children, ...props }) {
  return <Name {...props}>{children}</Name>
}

Post.Time = function PostTime({ children, ...props }) {
  return <Time {...props}>{children}</Time>
}

Post.Text = function PostText({ children, ...props }) {
  return <Text {...props}>{children}</Text>
}

Post.Group = function PostGroup({ children, ...props }) {
  return <Group {...props}>{children}</Group>
}

Post.Image = function PostImage(props) {
  return <Image {...props} />
}

Post.Video = function PostVideo(props) {
  return <Video controls {...props} />
}

Post.Options = function PostOptions({ children, ...props }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Options {...props}>
      <OptionsBtn onClick={() => setIsOpen((prev) => !prev)}>...</OptionsBtn>
      {isOpen && <div>{children}</div>}
    </Options>
  )
}

Post.Option = function PostOption({ children, ...props }) {
  return <Option {...props}>{children}</Option>
}

Post.LikesCounter = function PostLikesCounter({ children, ...props }) {
  return (
    <LikesCounter {...props}>
      <MdThumbUp />
      {children}
    </LikesCounter>
  )
}

Post.CommentsCounter = function PostCommentsCounter({ children, ...props }) {
  return <CommentsCounter {...props}>{children}</CommentsCounter>
}
