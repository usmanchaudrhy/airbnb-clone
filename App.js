import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import MapView from "react-native-maps";

import points from "./data/points.json";
import CustomMarker from "./components/CustomMarker";
import PointDetail from "./components/PointDetail";

// Solution from stackoverflow
// https://stackoverflow.com/questions/36685372/how-to-zoom-in-out-in-react-native-map/36688156#36688156
function getRegion(origin, destination, zoom) {
  const oLat = Math.abs(origin.latitude);
  const oLng = Math.abs(origin.longitude);
  const dLat = Math.abs(destination.latitude);
  const dLng = Math.abs(destination.longitude);

  return {
    latitude: (origin.latitude + destination.latitude) / 2,
    longitude: (origin.longitude + destination.longitude) / 2,
    latitudeDelta: Math.abs(oLat - dLat) + zoom,
    longitudeDelta: Math.abs(oLng - dLng) + zoom,
  };
}

export default function App() {
  const origin = { latitude: -33.8688, longitude: 151.2093 };
  const destination = {
    latitude: -33.8679,
    longitude: 151.2074,
  };
  const region = getRegion(origin, destination, 0.1);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region}>
        {points.map((point) => (
          <CustomMarker key={point.id} point={point} />
        ))}
      </MapView>
      <PointDetail point={points[0]} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
