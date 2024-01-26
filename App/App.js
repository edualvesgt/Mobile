import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

export default function App() {
  return (
    <View style={styles.container}>
      <Video
        source={require('./assets/stars.mp4')} // Substitua pelo caminho do seu vídeo
        style={styles.videoBackground}
        rate={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping 
      />
      <View style={styles.overPlay}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} defaultValue ="Digite seu email" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput style={styles.input} defaultValue='Senha'secureTextEntry/>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoBackground: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overPlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay para escurecer o vídeo
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: '#CCA9DD',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    color: '#fff',
  },
  loginButton: {
    backgroundColor: 'rgba(204, 169, 221, 0.5)', // Cor predominante roxa
    width:150,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
