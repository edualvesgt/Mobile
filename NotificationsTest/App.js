import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as Notification from 'expo-notifications'

// Solicitar permissao 
Notification.requestPermissionsAsync();

//Definir como as notificacoes devem ser tratadas 
Notification.setNotificationHandler({
  handleNotification: async () => ({

    //Mostra o alerta 
    shouldShowAlert: true,
    //Reproduz o som 
    shouldPlaySound: true,
    //Configura o numero de notificacao 
    shouldSetBadge: false
  })
})

export default function App() {

  //funcao para lidar com a chamada da notiifcacao 
  const handleCallNotification = async () => {
    //Obtem o status da permissao 
    const { status } = await Notification.getPermissionsAsync()

    if (status != "granted") {
      alert("Voce nao Habilitou as Notificacoes")
      return;
    }

    //Obter O token de Envio de notificacao 
    const token = await Notification.getExpoPushTokenAsync()
    console.log(token);

    //Agendar uma notificacao para ser exibida
    await Notification.scheduleNotificationAsync({
      content: {
        title: "Hello World",
        body: "Criado Uma POC para implementar Expo Notifications",
      },
      trigger: null
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCallNotification}>
        <Text style={styles.text}>
          Clique Aqui para ver A NOTIFICACAO
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
  button: {
    width: "80%",
    height: 80,
    backgroundColor: "green",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#FFF",

  }


});
