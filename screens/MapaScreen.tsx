import { StyleSheet, Text, View,Platform} from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapaScreen() {
    return (
      <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
      );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
