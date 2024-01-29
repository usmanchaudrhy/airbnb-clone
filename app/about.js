import { View, Text, Pressable, Button } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>About</Text>
      <Link href={"/"} asChild>
        <Button title="Home" />
      </Link>
    </View>
  );
}
