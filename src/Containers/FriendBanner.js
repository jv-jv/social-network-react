import React from "react"
import firebase from "firebase/app"
import "firebase/firestore"
import useCurrentUser from "../Hooks/useCurrentUser"
import useDatabase from "../Hooks/useDatabase"
import { isPlural } from "../helpers/helpers"
import { Profile } from "../Components"

export default function FriendBanner({ friendId }) {
  const { users, usersDB } = useDatabase()
  const { currentUser, currentUserDetails } = useCurrentUser()
  const friendDetails = users.find((e) => e.userId === friendId)

  const isFriend =
    currentUserDetails &&
    currentUserDetails.friends.some((friend) => friend.userId === friendId)

  function addRemoveFriend() {
    if (currentUser.userId === friendId) return
    if (isFriend) {
      usersDB.doc(currentUserDetails.docId).update({
        friends: firebase.firestore.FieldValue.arrayRemove({
          userId: friendId,
        }),
      })
    } else {
      usersDB.doc(currentUserDetails.docId).update({
        friends: firebase.firestore.FieldValue.arrayUnion({
          userId: friendId,
        }),
      })
    }
  }

  return currentUser && friendDetails ? (
    <Profile>
      <Profile.Avatar src={friendDetails.avatar} />
      <Profile.Group>
        <Profile.Name to={`/home/friends/${friendDetails.userId}`}>
          {friendDetails.displayName}
        </Profile.Name>
        <Profile.Friends>
          {isPlural(friendDetails.friends.length, "friend")}
        </Profile.Friends>
      </Profile.Group>
      <Profile.Button onClick={() => addRemoveFriend()} isActive={isFriend}>
        {isFriend ? "Remove" : "Add"}
      </Profile.Button>
    </Profile>
  ) : null
}
