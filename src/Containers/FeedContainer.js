import React from "react"
import useCurrentUser from "../Hooks/useCurrentUser"
import { sortDesc } from "../helpers/helpers"
import EditorContainer from "./EditorContainer"
import PostContainer from "./PostContainer"
import { Placeholder, Wrapper } from "../Components"

export default function FeedContainer() {
  const { friendsPosts, currentUserPosts } = useCurrentUser()
  const postsToDisplay = sortDesc([...friendsPosts, ...currentUserPosts])

  return (
    <Wrapper.Home>
      <EditorContainer />

      {postsToDisplay.length === 0 ? (
        <Placeholder>
          <Placeholder.Text>
            {"Nothing to see. Post something or "}
            <Placeholder.Link to="/home/explore">
              add new friends
            </Placeholder.Link>
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
