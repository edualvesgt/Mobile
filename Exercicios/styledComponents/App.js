import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Container } from './src/components/Container/Container';
import { Title } from './src/components/Title/Title';
import { Button, Button_Text } from './src/components/Button/Button';

// Importando o hook useFonts e a fonte SingleDay_400Regular do pacote @expo-google-fonts/single-day
import { useFonts, SingleDay_400Regular } from '@expo-google-fonts/single-day';


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

  // Carregando a fonte SingleDay_400Regular usando o hook useFonts
  let [fontsLoaded, fontError] = useFonts({
    SingleDay_400Regular,
  });

  // Verificando se as fontes foram carregadas com sucesso, caso contrário, retorna null
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Container>
      <SafeAreaView>

        <Title>Contador : {count} </Title>

        <Button onPress={Increment}>
          <Button_Text>Increment</Button_Text>
        </Button>

        <Button onPress={Decrement}>
          <Button_Text>Decrement</Button_Text>
        </Button>

      </SafeAreaView>


    </Container>
  );
}


