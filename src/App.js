import React from "react"
import { Switch, Route } from "react-router-dom"
import { Wrapper } from "./Components"
import { useAuth } from "./Context/AuthContext"
import { ProtectedRoute } from "./helpers/routes"

import { Home, LandingPage, SignIn, SignUp } from "./Pages"

export default function App() {
  const { currentUser } = useAuth()
  return (
    <Wrapper.Main>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <ProtectedRoute user={currentUser} path="/home">
          <Home />
        </ProtectedRoute>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </Wrapper.Main>
  )
}
