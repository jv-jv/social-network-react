import React, { useState } from "react"
import { ProfileEditor } from "../Components"
import useCurrentUser from "../Hooks/useCurrentUser"
import useDatabase from "../Hooks/useDatabase"
import firebaseApp from "../firebase"

export default function ProfileEditorContainer() {
  const { usersDB } = useDatabase()
  const { currentUserDetails } = useCurrentUser()
  const [newName, setNewName] = useState("")
  const [newPicUrl, setNewPicUrl] = useState("")

  async function handleFileUpload(e) {
    const fireRef = firebaseApp.storage().ref().child(Date())
    await fireRef.put(e.target.files[0])
    setNewPicUrl(await fireRef.getDownloadURL())
  }

  function updateName() {
    usersDB.doc(currentUserDetails.docId).update({
      displayName: newName,
    })
  }

  function updateAvatar() {
    usersDB.doc(currentUserDetails.docId).update({
      avatar: newPicUrl,
    })
  }

  return (
    <ProfileEditor>
      <ProfileEditor.Text>Edit your Name</ProfileEditor.Text>
      <ProfileEditor.Input
        value={newName}
        onChange={(e) => {
          const { value } = e.target
          setNewName(value)
        }}
      />
      <ProfileEditor.Button
        onClick={(e) => {
          e.preventDefault()
          updateName()
        }}
      >
        Save
      </ProfileEditor.Button>

      <ProfileEditor.Text>Change your profile picture</ProfileEditor.Text>
      <ProfileEditor.Upload
        onChange={(e) => {
          handleFileUpload(e)
        }}
      />
      <ProfileEditor.Button
        onClick={(e) => {
          e.preventDefault()
          updateAvatar()
        }}
      >
        Upload
      </ProfileEditor.Button>
    </ProfileEditor>
  )
}
