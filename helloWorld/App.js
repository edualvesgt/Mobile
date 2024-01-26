import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View,TouchableOpacity, Touchable } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.photo}
        source={{
          uri: 'https://pt.pngtree.com/freepng/male-avatar-vector-icon_4005094.html',
        }}
      />
      <Text style={styles.text}>OI DUDU  !!!!!!!!</Text>

      <TextInput
        style={styles.input}
        defaultValue='Input Test'
      />



      <TouchableOpacity style = {styles.bnt}>
        <Text>Botao</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#993399',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: "white",
    fontSize: 50,
    fontWeight: "500"
  },

  input: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "gray",
    padding: 10
  },
  photo: {
    width: 100,
    height: 100,
  },

  bnt: {
    borderColor: "white",
    width: "60%",
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  }

});
