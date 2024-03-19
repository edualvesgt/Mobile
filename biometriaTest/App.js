import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as LocalAuthentication from 'expo-local-authentication'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import moment from 'moment';

export default function App() {
  const [history, setHistory] = useState({})
  const [authenticated, setAuthenticated] = useState(false)
  const [biometricExist, setBiometricExist] = useState(false)

  async function CheckExistsAuthentication() {
    // Validar se o Usuario tem acesso a Biometria 

    const compatible = await LocalAuthentication.hasHardwareAsync();

    setBiometricExist(compatible)

    //Consula=tar validacoes 

    // const types = await LocalAuthentication.supportedAuthenticationTypesAsync()
    // console.log(LocalAuthentication.AuthenticationType[types[0]]);
  }

  async function handleAuthentication() {
    console.log("Funcao deu Start");
    const biometric = await LocalAuthentication.isEnrolledAsync();

    //Validar se Existe um biometria cadastrada
    if (!biometric) {
      return Alert.alert("Falha Ao logar, Nao foi enncontrada nenhuma biometria cadastrada")
    }

    //Se existir 
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login com Biometria"
    })

    setAuthenticated(auth.success)

    if (auth.success) {
      console.log("OLha aqqqqq");
      SetHistory()
    }

  }


  //Funcao Set 
  async function SetHistory() {
    const objAuth = {
      dateAuthenticate: moment().format("DD/MM/YYYY HH:mm:ss")
    }

    await AsyncStorage.setItem("authenticate", JSON.stringify(objAuth))

    setHistory(objAuth)
  }


  async function GetHistory() {

    const objAuth = await AsyncStorage.getItem("authenticate")

    if (objAuth) {
      setHistory(JSON.parse(objAuth))
    }
  }

  useEffect(() => {
    CheckExistsAuthentication();
    GetHistory()
  })
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {biometricExist ? "Seu dispositivo e compativel com o Acesso" :
          "Seu Dispositivo nao tem acesso com o nosso acesso "}
      </Text>

      <TouchableOpacity onPress={() => handleAuthentication()} style={styles.ButtonAuth}>
        <Text style={styles.TextAuth}>
          Autenticar Acesso
        </Text>
      </TouchableOpacity>

      <Text style={[styles.textRetun, { color: authenticated ? 'green' : 'red' }]}>
        {authenticated ? "Autenticado" : "Nao Autenticado "}
      </Text>


      {history.dateAuthenticate ?
        <Text style={styles.textHistory}> Ultimo Acesso em  {history.dateAuthenticate}</Text> : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
    width: "70%"
  },
  ButtonAuth: {
    padding: 16,
    borderRadius: 15,
    margin: 20,
    backgroundColor: "#ff8800"
  },
  TextAuth: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  },
  textRetun: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 50,
  },
  textHistory: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888383',
    position: 'absolute',
    bottom: 120
  }
})
