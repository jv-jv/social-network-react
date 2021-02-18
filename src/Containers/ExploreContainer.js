import React from "react"
import useCurrentUser from "../Hooks/useCurrentUser"
import FriendBanner from "./FriendBanner"
import { Wrapper } from "../Components"

export default function ExploreContainer() {
  const { allOtherUsers } = useCurrentUser()
  return (
    <Wrapper.Home>
      {allOtherUsers.map((user, index) => (
        <FriendBanner key={index} friendId={user.userId} />
      ))}
    </Wrapper.Home>
  )
}
