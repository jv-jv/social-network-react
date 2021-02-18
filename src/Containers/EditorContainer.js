import React, { useState } from "react"
import { useAuth } from "../Context/AuthContext"
import useDatabase from "../Hooks/useDatabase"
import firebaseApp from "../firebase"

import { Editor } from "../Components"
import { MdImage, MdVideocam } from "react-icons/md"

export default function EditorContainer() {
  const [url, setUrl] = useState("")
  const [attachmentType, setAttachmentType] = useState("")

  const [text, setText] = useState("")
  const { currentUser } = useAuth()
  const { postsDB } = useDatabase()

  function handleSubmit(e) {
    e.preventDefault()
    if (!text) return

    const dataToSubmit = {
      postId: `${Date.now()}-${currentUser.uid}`,
      userId: currentUser.uid,
      timestamp: Date.now(),
      text,
      attachementUrl: url,
      attachmentType: attachmentType,
      comments: [],
      likes: [],
    }

    postsDB.add(dataToSubmit)

    setText("")
    setAttachmentType("")
    setUrl("")
  }

  async function handleFileUpload(e) {
    const fireRef = firebaseApp.storage().ref().child(Date())

    await fireRef.put(e.target.files[0])
    setUrl(await fireRef.getDownloadURL())
  }

  return (
    <Editor onSubmit={handleSubmit}>
      <Editor.Title>
        Create Post
        <Editor.Close />
      </Editor.Title>

      <Editor.TextArea
        value={text}
        onChange={(e) => {
          const { value } = e.target
          setText(value)
        }}
      />

      <Editor.Group>
        <Editor.Attachment attachmentType="image">
          <MdImage />
        </Editor.Attachment>

        <Editor.Attachment attachmentType="video">
          <MdVideocam />
        </Editor.Attachment>
      </Editor.Group>

      <Editor.Input
        name="image"
        type="file"
        onChange={(e) => {
          handleFileUpload(e)
          setAttachmentType("img")
        }}
      />

      <Editor.Input
        name="video"
        type="file"
        onChange={(e) => {
          handleFileUpload(e)
          setAttachmentType("vid")
        }}
      />
      {attachmentType === "img" && <Editor.Image src={url} />}
      {attachmentType === "vid" && <Editor.Video src={url} />}

      <Editor.Button>Post</Editor.Button>
    </Editor>
  )
}
