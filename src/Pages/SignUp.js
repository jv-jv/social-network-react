import React, { useState } from "react"
import { OptForm } from "../Components"
// import HeaderContainer from "../Containers/HeaderContainer"
import { Header } from "../Components"

import { useAuth } from "../Context/AuthContext"
import { useHistory } from "react-router-dom"

export default function SignUp() {
  const [email, setEmail] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmedPassword, setConfirmedPassword] = useState("")
  const [error, setError] = useState()
  const [isSending, setIsSending] = useState(false)
  const { signUp } = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    if (password !== confirmedPassword) {
      setError("password does not match")
      return
    }

    try {
      setError("")
      setIsSending(true)
      await signUp(email, password, displayName)
      setIsSending(false)
      history.push("/home")
    } catch (err) {
      setError(`Failed to create an account: ${err.message}`)
      setIsSending(false)
    }
  }

  return (
    <>
      {/* <HeaderContainer /> */}
      <Header>
        <Header.Logo></Header.Logo>
      </Header>

      <OptForm onSubmit={handleSubmit}>
        <OptForm.Title>Sign Up</OptForm.Title>
        {error && <OptForm.Error>{error}</OptForm.Error>}
        <OptForm.Input
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <OptForm.Input
          placeholder="Display Name"
          type="text"
          value={displayName}
          onChange={(e) => {
            setDisplayName(e.target.value)
          }}
        />
        <OptForm.Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <OptForm.Input
          placeholder="Confirm password"
          type="password"
          value={confirmedPassword}
          onChange={(e) => {
            setConfirmedPassword(e.target.value)
          }}
        />
        <OptForm.Button disabled={isSending}>Sign Up</OptForm.Button>
        <OptForm.Text>
          {"Already have an account? "}
          <OptForm.Link to="/signin">Sign In</OptForm.Link>
        </OptForm.Text>
      </OptForm>
    </>
  )
}
