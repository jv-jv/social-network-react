import React from "react"
import { Main, Home } from "./style"

export default function Wrapper({ children, ...props }) {
  return <div>{children}</div>
}

Wrapper.Main = function WrapperMain({ children, ...props }) {
  return <Main {...props}>{children}</Main>
}

Wrapper.Home = function WrapperHome({ children, ...props }) {
  return <Home {...props}>{children}</Home>
}
