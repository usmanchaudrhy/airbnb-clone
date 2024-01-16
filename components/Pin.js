import { View, StyleSheet, Text } from "react-native";

export default function (props) {
  const { point } = props;
  return (
    <View style={styles.markerContainer}>
      <Text>${point?.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  markerContainer: {
    backgroundColor: "white",
    paddingVertical: 1,
    paddingHorizontal: 8,
    borderRadius: 5,
    borderWidth: 1,
  },
});
