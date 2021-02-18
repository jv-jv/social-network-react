import React from "react"
import useCurrentUser from "../Hooks/useCurrentUser"
import useDatabase from "../Hooks/useDatabase"
import { timePassed } from "../helpers/day"
import { Wrapper, Notification, Placeholder } from "../Components"

export default function NotificationContainer() {
  const { users } = useDatabase()
  const { sortedCurrentUserLikesAndComments } = useCurrentUser()

  return (
    // create anchor to post (if i cba)

    <Wrapper.Home>
      {sortedCurrentUserLikesAndComments.length === 0 ? (
        <Placeholder>
          <Placeholder.Text>No Notification yet</Placeholder.Text>
        </Placeholder>
      ) : (
        sortedCurrentUserLikesAndComments.map((e, index) => {
          const name = users.find((user) => user.userId === e.userId) || ""
          const isComment = e.text ? true : false
          const text = isComment
            ? " commented on your post"
            : " liked your post"

          return (
            <Notification key={index}>
              <Notification.Text>
                <Notification.Name to={`/home/friends/${e.userId}`}>
                  {name.displayName}
                </Notification.Name>
                {text}
              </Notification.Text>
              <Notification.Time>{timePassed(e.timestamp)}</Notification.Time>
            </Notification>
          )
        })
      )}
    </Wrapper.Home>
  )
}
