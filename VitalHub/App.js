import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from './src/screens/Navigation/Navigation';
import { Login } from './src/screens/Login/Login';
import { useFonts, MontserratAlternates_600SemiBold,MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium
  })

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (

    <NavigationContainer>
      {/* Componente de navegacao  */}
      <Stack.Navigator>

        <Stack.Screen
          // Nome da Tela
          name='Navigation'
          // Componente que sera Renderizado
          component={Navigation}
          // Titulo da Tela
          options={{ title: "Navigation" }}
        />

        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: "Login" }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}


