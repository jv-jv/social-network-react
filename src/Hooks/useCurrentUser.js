import useDatabase from "./useDatabase"
import { useAuth } from "../Context/AuthContext"

export default function useCurrentUser() {
  const { currentUser } = useAuth()
  const { posts, users } = useDatabase()

  // Current User

  const currentUserDetails = users.find((e) => e.userId === currentUser.uid)
  const currentUserPosts = posts.filter((e) => e.userId === currentUser.uid)

  const currentUserLikesAndComments = currentUserPosts.reduce((acc, post) => {
    // // include postId
    // const postId = post.docId
    // const likes = post.likes.map((like) => ({ ...like, postId }))
    // const comments = post.comments.map((comments) => ({ ...comments, postId }))
    // acc.push(...likes, ...comments)

    acc.push(...post.likes, ...post.comments)
    return acc
  }, [])

  const sortedCurrentUserLikesAndComments = currentUserLikesAndComments.sort(
    (a, b) => b.timestamp - a.timestamp
  )

  // Other users

  const allOtherUsers = users.filter((user) => user.userId !== currentUser.uid)

  const friendsPosts = posts.filter((post) => {
    const isFriend =
      currentUserDetails &&
      currentUserDetails.friends.some((friend) => friend.userId === post.userId)

    if (isFriend) return post

    return null
  })

  return {
    currentUser,
    currentUserDetails,
    currentUserPosts,
    sortedCurrentUserLikesAndComments,
    allOtherUsers,
    friendsPosts,
  }
}
