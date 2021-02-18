import { useState, useEffect } from "react"

import firebaseApp from "../firebase"

const db = firebaseApp.firestore()
const postsDB = db.collection("posts")
const usersDB = db.collection("users")

export default function useDatabase() {
  const [posts, setPosts] = useState([])
  const [users, setUser] = useState([])

  useEffect(() => {
    const unsubscribePosts = postsDB.onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => {
          return {
            docId: doc.id,
            ...doc.data(),
          }
        })
      )
    )

    const unsubscribeUsers = usersDB.onSnapshot((snapshot) =>
      setUser(
        snapshot.docs.map((doc) => {
          return {
            docId: doc.id,
            ...doc.data(),
          }
        })
      )
    )

    return () => {
      // unsubscribe
      unsubscribePosts()
      unsubscribeUsers()
    }
  }, [])

  return { postsDB, posts, usersDB, users }
}
