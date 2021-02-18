import React, { useContext } from "react"
import {
  EditorContextProvider,
  editorContext,
} from "../../Context/EditorContext"

import {
  Container,
  Title,
  Close,
  TextArea,
  Input,
  Group,
  Attachment,
  Image,
  Video,
  Button,
} from "./style"

export default function Editor({ children, ...props }) {
  return (
    <EditorContextProvider>
      <Container {...props}>{children}</Container>
    </EditorContextProvider>
  )
}

function Visible({ children, ...props }) {
  const { isExpanded } = useContext(editorContext)

  return isExpanded && children
}

Editor.Title = function EditorTitle({ children, ...props }) {
  return (
    <Visible>
      <Title {...props}>{children}</Title>
    </Visible>
  )
}

Editor.Close = function EditorClose(props) {
  const { compactEditor } = useContext(editorContext)

  return <Close onClick={compactEditor} {...props} />
}

Editor.TextArea = function EditorTextArea({ placeholder, onClick, ...props }) {
  const { isExpanded, expandEditor } = useContext(editorContext)

  return (
    <TextArea
      {...props}
      placeholder={placeholder || "Tell me something..."}
      isExpanded={isExpanded}
      onClick={() => {
        expandEditor()
        if (onClick) onClick()
      }}
    />
  )
}

Editor.Input = function EditorInput({ name, ...props }) {
  const { attachmentSelected } = useContext(editorContext)

  return (
    attachmentSelected === name && (
      <Visible>
        <label>
          {`${name}: `}
          <Input {...props} />
        </label>
      </Visible>
    )
  )
}

Editor.Group = function EditorGroup({ children, ...props }) {
  return (
    <Visible>
      <Group {...props}>{children}</Group>
    </Visible>
  )
}

Editor.Attachment = function EditorAttachment({
  children,
  attachmentType,
  onClick,
  ...props
}) {
  const { setAttachmentSelected } = useContext(editorContext)

  return (
    <Attachment
      onClick={() => {
        setAttachmentSelected(attachmentType)
        if (onClick) onClick()
      }}
      {...props}
    >
      {children}
    </Attachment>
  )
}

Editor.Image = function EditorImage(props) {
  return (
    <Visible>
      <Image {...props} />
    </Visible>
  )
}

Editor.Video = function EditorVideo(props) {
  return (
    <Visible>
      <Video {...props} controls />
    </Visible>
  )
}

Editor.Button = function EditorButton({ children, ...props }) {
  const { isExpanded } = useContext(editorContext)

  return (
    <Button disabled={!isExpanded} {...props}>
      {children}
    </Button>
  )
}
