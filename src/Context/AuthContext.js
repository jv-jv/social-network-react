import React, { useContext, useEffect, useState } from "react"
import firebaseApp from "../firebase"
import "firebase/auth"

import useDatabase from "../Hooks/useDatabase"

const authContext = React.createContext(null)

export function useAuth() {
  return useContext(authContext)
}

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const { usersDB } = useDatabase()

  async function signUp(email, password, name) {
    await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    const user = firebaseApp.auth().currentUser
    // await user.updateProfile({ displayName: name })
    usersDB.add({
      userId: user.uid,
      displayName: name,
      avatar:
        "https://heraldjournalism.com/wp-content/uploads/2020/05/960x0.jpg",
      friends: [],
    })
  }

  function login(email, password) {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return firebaseApp.auth().signOut()
  }

  useEffect(() => {
    const unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setIsLoading(false)
    })
    return unsubscribe
  }, [])

  const value = { signUp, login, logout, currentUser }

  return (
    <authContext.Provider value={value}>
      {!isLoading && children}
    </authContext.Provider>
  )
}
