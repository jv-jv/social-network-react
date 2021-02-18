import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import GlobalStyles from "./GlobalStyles"
import { BrowserRouter } from "react-router-dom"
import AuthContextProvider from "./Context/AuthContext"

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <GlobalStyles />
      <App />
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
)
