import React, { useState } from "react"
import { Comments } from "../Components"
import { useAuth } from "../Context/AuthContext"
import useDatabase from "../Hooks/useDatabase"
import firebase from "firebase/app"
import "firebase/firestore"

export default function CommentsContainer({
  comments,
  likes,
  docId,
  ...props
}) {
  const { users, posts, postsDB } = useDatabase()
  const { currentUser } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const isLiked = likes.some((e) => e.userId === currentUser.uid)

  function handleComments(commentText) {
    postsDB.doc(docId).update({
      comments: firebase.firestore.FieldValue.arrayUnion({
        text: commentText,
        userId: currentUser.uid,
        timestamp: Date.now(),
      }),
    })
  }

  function addLike() {
    postsDB.doc(docId).update({
      likes: firebase.firestore.FieldValue.arrayUnion({
        userId: currentUser.uid,
        timestamp: Date.now(),
      }),
    })
  }

  function removeLike() {
    const thisPost = posts.find((post) => post.docId === docId)
    const allOtherLikes = thisPost.likes.filter(
      (like) => like.userId !== currentUser.uid
    )
    postsDB.doc(docId).update({ likes: allOtherLikes })
  }

  function handleLikes() {
    if (isLiked) {
      removeLike()
    } else {
      addLike()
    }
  }

  return (
    <Comments {...props}>
      <Comments.Group>
        <Comments.Reaction onClick={() => handleLikes()} active={isLiked}>
          {isLiked ? "Liked" : "Like"}
        </Comments.Reaction>
        <Comments.Reaction
          onClick={() => setIsOpen((prev) => !prev)}
          active={isOpen}
        >
          Comment
        </Comments.Reaction>
      </Comments.Group>

      {isOpen &&
        comments.map((comment, index) => {
          const user = users.find((e) => e.userId === comment.userId)

          return (
            user && (
              <Comments.Comment key={index}>
                <Comments.User to={`/home/friends/${comment.userId}`}>
                  {user.displayName}
                </Comments.User>
                {comment.text}
              </Comments.Comment>
            )
          )
        })}
      {isOpen && <Comments.Editor handleSubmission={handleComments} />}
    </Comments>
  )
}
