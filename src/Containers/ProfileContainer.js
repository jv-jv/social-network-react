import React, { useState } from "react"
import useCurrentUser from "../Hooks/useCurrentUser"
import { isPlural, sortDesc } from "../helpers/helpers"
import EditorContainer from "./EditorContainer"
import ProfileEditorContainer from "./ProfileEditorContainer"
import PostContainer from "./PostContainer"
import { Wrapper, Profile, Placeholder } from "../Components"

export default function ProfileContainer() {
  const { currentUserDetails, currentUserPosts } = useCurrentUser()
  const postsToDisplay = sortDesc(currentUserPosts)
  const [isEditing, setIsEditing] = useState(false)

  return (
    <Wrapper.Home>
      {currentUserDetails && (
        <Profile>
          <Profile.Avatar src={currentUserDetails.avatar} />
          <Profile.Group>
            <Profile.Name to="/home/profile">
              {currentUserDetails.displayName}
            </Profile.Name>
            <Profile.Friends>
              {isPlural(currentUserDetails.friends.length, "friend")}
            </Profile.Friends>
          </Profile.Group>
          <Profile.Button
            onClick={() => {
              setIsEditing((prev) => !prev)
            }}
            isActive={isEditing}
          >
            {isEditing ? "Done" : "Edit"}
          </Profile.Button>
        </Profile>
      )}

      {isEditing ? <ProfileEditorContainer /> : <EditorContainer />}

      {postsToDisplay.length === 0 ? (
        <Placeholder>
          <Placeholder.Text>
            Nothing to see. Post something new
          </Placeholder.Text>
        </Placeholder>
      ) : (
        postsToDisplay.map((post, index) => (
          <PostContainer post={post} key={index} />
        ))
      )}
    </Wrapper.Home>
  )
}
