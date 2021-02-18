import React from "react"

import { Header } from "../Components"
import { Landing } from "../Components"

export default function LandingPage() {
  return (
    <>
      <Header>
        <Header.Logo></Header.Logo>
      </Header>

      <Landing>
        <Landing.Title>Generic Social Network</Landing.Title>
        <Landing.Subtitle>
          Generic Social Network helps you connect and share with the people in
          your life.
        </Landing.Subtitle>
        <Landing.Link to="/signin">Sign in</Landing.Link>
        <Landing.Link to="/signup">Sign up</Landing.Link>
      </Landing>
    </>
  )
}
