import { Image, StyleSheet, View, Text } from "react-native";

export default function ({ point }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: point.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{point?.title}</Text>
        <Text style={styles.description}>{point.description}</Text>

        <View style={styles.footer}>
          <Text style={styles.price}>$ {point.price}</Text>
          <Text style={styles.price}>
            ★ {point.rating} ({point.numberOfStars})
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 50,
    right: 10,
    left: 10,
    borderRadius: 5,
    flexDirection: "row",
    overflow: "hidden",
  },
  image: {
    width: 150,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    aspectRatio: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    color: "grey",
  },
  rightContainer: {
    padding: 10,
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
});
