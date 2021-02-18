import React, { useState } from "react"
import { OptForm } from "../Components"
import { Header } from "../Components"

import { useAuth } from "../Context/AuthContext"
import { useHistory } from "react-router-dom"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState()
  const [isSending, setIsSending] = useState(false)
  const { login } = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setIsSending(true)
      await login(email, password)
      setIsSending(false)
      history.push("/home")
    } catch (err) {
      setError(`Failed to Sign In: ${err.message}`)
      setIsSending(false)
    }
  }

  return (
    <>
      <Header>
        <Header.Logo></Header.Logo>
      </Header>

      <OptForm onSubmit={handleSubmit}>
        <OptForm.Title>Sign In</OptForm.Title>
        {error && <OptForm.Error>{error}</OptForm.Error>}
        <OptForm.Input
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
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

        <OptForm.Button disabled={isSending}>Sign In</OptForm.Button>

        <OptForm.Text>
          {"Need an account? "}
          <OptForm.Link to="/signup">Sign Up</OptForm.Link>
        </OptForm.Text>
      </OptForm>
    </>
  )
}
