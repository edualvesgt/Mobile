import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {

  const [count, setCount] = useState(0)

  const Increment = () => {

    setCount(count + 1)
  }

  const Decrement = () => {

    setCount(count - 1)
  }

  useEffect(() => {
    console.log(console.warn(`Contador Atualizado: ${count}`));
  }, [count])


  return (
    <View style={styles.container}>
      <SafeAreaView>

        <Text style = {styles.text}>Contador : {count} </Text>

        <TouchableOpacity style={styles.button} onPress={Increment}>
          <Text style={styles.button_text}>Increment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={Decrement}>
          <Text style={styles.button_text}>Decrement</Text>
        </TouchableOpacity>

      </SafeAreaView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black",
   
  },
  text:{
    color: "white"
  },
  button:{
    width:100,
    height:50,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#c8a2c8",

    marginTop:15
  },
  button_text:{
    fontSize: 15,
    fontWeight: 'bold'
  }
});
