import React from "react"
import { Tabs } from "expo-router"

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Explore",
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "Inbox",
        }}
      />
    </Tabs>
  )
}

export default Layout
