import React from "react"
import { useParams, Redirect } from "react-router-dom"
import useCurrentUser from "../Hooks/useCurrentUser"
import useDatabase from "../Hooks/useDatabase"
import { sortDesc } from "../helpers/helpers"
import PostContainer from "./PostContainer"
import FriendBanner from "./FriendBanner"
import { Placeholder, Wrapper } from "../Components"

export default function FriendContainer() {
  const { currentUserDetails } = useCurrentUser()
  const { posts } = useDatabase()
  const { friendId } = useParams()

  const isUser = currentUserDetails && friendId === currentUserDetails.userId
  const friendPosts = posts.filter((e) => e.userId === friendId)

  const postsToDisplay = sortDesc(friendPosts)

  return (
    <Wrapper.Home>
      {isUser && <Redirect from="/home/friends" to="/home/profile" />}
      <FriendBanner friendId={friendId} />

      {postsToDisplay.length === 0 ? (
        <Placeholder>
          <Placeholder.Text>{"Nothing to see yet :("}</Placeholder.Text>
        </Placeholder>
      ) : (
        postsToDisplay.map((post, index) => (
          <PostContainer post={post} key={index} />
        ))
      )}
    </Wrapper.Home>
  )
}
