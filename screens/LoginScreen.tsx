import { Button, StyleSheet, Text, View, TextInput, Alert, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
        let title = ""
        let mensaje = ""
        switch (errorCode) {
          case "auth/invalid-credential":
            title = "Error de contraseña"
            mensaje = "Contraseña Incorrecta , Revisar Credenciales"
            break;
          case "auth/invalid-email":
            title = "Error de correo"
            mensaje = "correo incorrecto, Revisar Credenciales"
            break;
          default:
            title = "Acceso denegado"
            mensaje = "Revisar Credenciales"
            break;
        }

        Alert.alert(title, mensaje);
      });

  }

  return (

    <ImageBackground style={styles.backImg} source={{ uri: "https://img.freepik.com/vector-premium/perros-gatos-mascotas-amigables_24877-6263.jpg?w=740" }}>
      <View style={styles.container}>
        <Text style={styles.txt}>Login</Text>

        <TextInput
          placeholder='Ingresa tu correo electrónico'
          onChangeText={(texto) => (setCorreo(texto))}
          keyboardType='email-address'
          style={styles.input}
        />
        <TextInput
          placeholder='Ingresa contraseña'
          onChangeText={(texto) => (setContrasenia(texto))}
          style={styles.input}
        />
        
        <TouchableOpacity onPress={login} style={styles.btnI}>
           <Text style={styles.text}>Ingresar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Registro')} style={styles.btnR}>   
        <Text style={styles.text}> 👉 Regístrate aquí 👈</Text>
        </TouchableOpacity>  
        </View>
        <View>
          
        </View>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(102, 204, 255, 0.3)',
    justifyContent: 'flex-start',
    alignItems:'center',
    width: '80%',
    height: '40%',
    borderRadius:10,
    padding:10
  },
  backImg: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    color:'black',
    fontWeight: 'bold',
    fontSize: 35,
    opacity:1,
    marginBottom:5
  },
  text:{

    color:'white',
    fontSize:20,
    fontWeight:'bold',
  },
  btnI:{
    justifyContent:'center',
    height:'35%',
    backgroundColor:'blue',
    alignItems:'center',
    borderRadius:8,
    padding:5
  },
  btnR:{
    height:'35%',
    backgroundColor:'green',
    padding:5,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 10,
    width: '70%',
    height: '15%',
    padding:5,
    borderRadius:5,
    fontSize:15
  }

})