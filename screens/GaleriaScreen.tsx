import { Button, StyleSheet, Text, View , Image, Alert} from 'react-native' 
import React, { useState } from 'react' 
import * as ImagePicker from 'expo-image-picker'; 
import { ref, uploadBytes } from "firebase/storage";
import { storage } from '../config/Config';
 
export default function GaleriaScreen() { 
 
    const [image, setImage] = useState(""); 
 
    const pickImage = async () => { 
      // No permissions request is necessary for launching the image library 
      let result = await ImagePicker.launchImageLibraryAsync({ 
        mediaTypes: ImagePicker.MediaTypeOptions.All, 
        allowsEditing: true, 
        aspect: [4, 3], 
        quality: 1, 
      }); 
   
      console.log(result); 
   
      if (!result.canceled) { 
        setImage(result.assets[0].uri); 
      } 
    }; 
   async function subir(){
    const response = await fetch(image);        
     const blob = await response.blob();
 
const storageRef = ref(storage, 'avatar/'+"Temp");

uploadBytes(storageRef, blob).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
Alert.alert("Mensaje","Imagen subida con exito")
   }

  return ( 
    <View> 
      <Button title="Pick an image from camera roll" onPress={pickImage} /> 
      <Image source={{ uri: image }} style={styles.image} /> 
      <Button title='Subir imagen' color={'green'} onPress={subir}/>
    </View> 
  ) 
} 
 
const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
      }, 
      image: { 
        width: 200, 
        height: 200, 
        resizeMode:'contain' 
      }, 
 
})