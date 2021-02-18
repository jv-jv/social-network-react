import React, { useState } from "react"

import { MdArrowForward } from "react-icons/md"

import {
  Container,
  Comment,
  User,
  Group,
  Reaction,
  Editor,
  EditorInput,
  EditorBtn,
} from "./style"

export default function Comments({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

Comments.User = function CommentsUser({ children, ...props }) {
  return <User {...props}>{children}</User>
}

Comments.Group = function CommentsGroup({ children, ...props }) {
  return <Group {...props}>{children}</Group>
}

Comments.Reaction = function CommentsReaction({ children, ...props }) {
  return <Reaction {...props}>{children}</Reaction>
}

Comments.Comment = function CommentsComment({ children, ...props }) {
  return <Comment {...props}>{children}</Comment>
}

Comments.Editor = function CommentsEditor({ handleSubmission, ...props }) {
  const [commentText, setCommentText] = useState("")

  return (
    <Editor
      {...props}
      onSubmit={(e) => {
        e.preventDefault()
        if (!commentText) return
        handleSubmission(commentText)
        setCommentText("")
      }}
    >
      <EditorInput
        value={commentText}
        onChange={(e) => {
          const { value } = e.target
          setCommentText(value)
        }}
      />
      <EditorBtn>
        <MdArrowForward />
      </EditorBtn>
    </Editor>
  )
}
