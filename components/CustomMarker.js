import { StyleSheet } from "react-native";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import Pin from "./Pin";

export default function (props) {
  const { point } = props;

  return (
    <Marker
      provider={PROVIDER_GOOGLE}
      coordinate={{
        latitude: point.latitude,
        longitude: point.longitude,
      }}
      description={point?.description ?? "description not found"}
      title={point.title}
    >
      <Pin point={point} />
    </Marker>
  );
}

const styles = StyleSheet.create({
  markerContainer: {},
});
