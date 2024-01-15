import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MapView from 'react-native-maps'

export default function App() {
    /** Test application for the maps project */
  return (
    <View style={styles.container}>
        <MapView style={styles.map} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%'
  }
});
