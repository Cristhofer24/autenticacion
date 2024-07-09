import { StyleSheet, Text, View,Platform} from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapaScreen() {
 const region = {
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
    };

const [location, setLocation] = useState("");
const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg("Permiso denegado");
        return;
      }

      let location:any = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);


    // let text = 'Waiting..';
    // if (errorMsg) {
    //   text = errorMsg;
    // } else if (location) {
    //   text = JSON.stringify(location);
    // }

  

    return (
        <View style={styles.container}>
         <MapView style={styles.map} initialRegion={region}>
        {/* <Marker coordinate={region} title="Quito, Ecuador" />  */}
         </MapView>  
        <Text style={styles.paragraph}>{text}</Text>
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
