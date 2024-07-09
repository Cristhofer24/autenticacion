import { Button, StyleSheet, Text, View, TextInput, Alert} from 'react-native'
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';
export default function LoginScreen({ navigation }: any) {

  const [correo, setCorreo] = useState('')
  const [contrasenia, setContrasenia] = useState('')

  function login() {
    
const auth = getAuth();
signInWithEmailAndPassword(auth, correo, contrasenia)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  
    navigation.navigate('Drawer')
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    let title=""
     let mensaje=""
     if(errorCode=="auth/invalid-credential"){
      title="Error de contraseña"
      mensaje="Contraseña Incorrecta , Revisar Credenciales"
  }else if(errorCode=="auth/invalid-email"){
   title="Error de correo"
      mensaje="correo incorrecto, Revisar Credenciales"
  }else{
       title="Acceso Denegado"
      mensaje="Revisar Credenciales"
  }
    Alert.alert(title,mensaje);
  });
   
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Login</Text>

      <TextInput
        placeholder='Ingresa tu correo electrónico'
        onChangeText={(texto) => (setCorreo(texto))}
        keyboardType='email-address'
      />
      <TextInput
        placeholder='Ingresa contraseña'
        onChangeText={(texto) => (setContrasenia(texto))}
      />

      <Button title='Ingresar' onPress={login} />

      <Text onPress={() => navigation.navigate('Registro')}> 👉 Regístrate aquí 👈</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})