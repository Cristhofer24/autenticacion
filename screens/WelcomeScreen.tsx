import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../config/Config';

export default function WelcomeScreen({navigation}:any) {
  function logOut(){
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    navigation.navigate("Login")
  }
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button title='Cerrar sesion' color={'green'} onPress={logOut}/>
    </View>
  )
}

const styles = StyleSheet.create({})