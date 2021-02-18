import React from "react"
import useDatabase from "../Hooks/useDatabase"
import useCurrentUser from "../Hooks/useCurrentUser"
import { isPlural } from "../helpers/helpers"
import { timePassed } from "../helpers/day"
import CommentsContainer from "./CommentsContainer"
import { Post } from "../Components"

export default function PostContainer({ post }) {
  const { postsDB, users } = useDatabase()
  const { currentUserDetails } = useCurrentUser()

  const isCurrentUserPost =
    currentUserDetails && post.userId === currentUserDetails.userId

  const postUser = users.find((e) => e.userId === post.userId)
  function deletePost(id) {
    postsDB.doc(id).delete()
  }

  return (
    users.length > 0 && (
      <Post>
        <Post.Avatar src={postUser.avatar} />
        <Post.Options>
          {isCurrentUserPost && (
            <Post.Option onClick={() => deletePost(post.docId)}>
              Delete
            </Post.Option>
          )}
          <Post.Option onClick={() => alert("post reported")}>
            Report
          </Post.Option>
        </Post.Options>
        <Post.Body>
          <Post.Name to={`/home/friends/${postUser.userId}`}>
            {postUser.displayName}
            <Post.Time>{timePassed(post.timestamp)}</Post.Time>
          </Post.Name>
          <Post.Text>{post.text}</Post.Text>

          {post.attachmentType === "img" && (
            <Post.Image src={post.attachementUrl} />
          )}
          {post.attachmentType === "vid" && (
            <Post.Video src={post.attachementUrl} />
          )}
          <Post.Group>
            <Post.LikesCounter>
              {isPlural(post.likes.length, "like")}
            </Post.LikesCounter>
            <Post.CommentsCounter>
              {isPlural(post.comments.length, "comment")}
            </Post.CommentsCounter>
          </Post.Group>

          <CommentsContainer
            comments={post.comments}
            likes={post.likes}
            docId={post.docId}
          />
        </Post.Body>
      </Post>
    )
  )
}
