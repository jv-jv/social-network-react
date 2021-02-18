import React from "react"
import { useAuth } from "../Context/AuthContext"
import { Route, Switch, Redirect } from "react-router-dom"

import SidebarContainer from "../Containers/SidebarContainer"
import FeedContainer from "../Containers/FeedContainer"
import ProfileContainer from "../Containers/ProfileContainer"
import FriendContainer from "../Containers/FriendContainer"
import ExploreContainer from "../Containers/ExploreContainer"
import NotificationContainer from "../Containers/NotificationContainer"
import { Header } from "../Components"

export default function Home() {
  const { logout } = useAuth()

  return (
    <>
      <Header>
        <Header.Logo></Header.Logo>
        <Header.Exit onClick={logout} />
      </Header>

      <SidebarContainer />

      <Switch>
        <Redirect exact from="/home" to="/home/feed" />

        <Route path="/home/feed">
          <FeedContainer />
        </Route>

        <Route exact path="/home/profile">
          <ProfileContainer />
        </Route>

        <Route path="/home/explore">
          <ExploreContainer />
        </Route>

        <Route path="/home/notifications">
          <NotificationContainer />
        </Route>

        <Route path="/home/friends/:friendId">
          <FriendContainer />
        </Route>
      </Switch>
    </>
  )
}
