import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

// Testing some changes here
export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello, World!</Text>
      <Link href="/about" asChild>
        <Button title="About" />

      </Link>
    </View>
  );
}
