import { Slot } from "expo-router";
import { View, Text } from "react-native";

export default function HomeLayout() {
  // Slot is where the app body will go
  return (
    <>
      <Text style={{ backgroundColor: "red", fontSize: 40 }}>Header</Text>
      <Slot />
      <Text style={{ backgroundColor: "pink", fontSize: 40 }}>Footer</Text>
    </>
  );
}
