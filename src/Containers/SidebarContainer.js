import React from "react"

import { Sidebar } from "../Components"
import {
  MdNotifications,
  MdAccountCircle,
  MdExplore,
  MdHome,
} from "react-icons/md"

export default function SidebarContainer() {
  return (
    <Sidebar>
      <Sidebar.Item to="/home/feed">
        <Sidebar.Title>
          <Sidebar.Icon>
            <MdHome />
          </Sidebar.Icon>
          <Sidebar.Text>Feed</Sidebar.Text>
        </Sidebar.Title>
      </Sidebar.Item>

      <Sidebar.Item to="/home/profile">
        <Sidebar.Title>
          <Sidebar.Icon>
            <MdAccountCircle />
          </Sidebar.Icon>
          <Sidebar.Text>Profile</Sidebar.Text>
        </Sidebar.Title>
      </Sidebar.Item>

      <Sidebar.Item to="/home/explore">
        <Sidebar.Title>
          <Sidebar.Icon>
            <MdExplore />
          </Sidebar.Icon>
          <Sidebar.Text>Explore</Sidebar.Text>
        </Sidebar.Title>
      </Sidebar.Item>

      <Sidebar.Item to="/home/notifications">
        <Sidebar.Title>
          <Sidebar.Icon>
            <MdNotifications />
          </Sidebar.Icon>
          <Sidebar.Text>Notifications</Sidebar.Text>
        </Sidebar.Title>
      </Sidebar.Item>
    </Sidebar>
  )
}
