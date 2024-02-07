import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from './src/screens/Navigation/Navigation';
import { Login } from './src/screens/Login/Login';
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';
import { ForgotPassword } from './src/screens/ForgotPassword/ForgotPassword';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { VerifyEmail } from './src/screens/VerifyEmail/VerifyEmail';
import { ChangePassword } from './src/screens/ChangePassword/ChangePassword';


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium,
    Quicksand_600SemiBold,

  })

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (

    <NavigationContainer>
      {/* Componente de navegacao  */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {/* <Stack.Screen
          // Nome da Tela
          name='Navigation'
          // Componente que sera Renderizado
          component={Navigation}
          // Titulo da Tela
          options={{ title: "Navigation" }}
        /> */}

        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: "Login" }}
        />

        <Stack.Screen
          name='ForgotPassword'
          component={ForgotPassword}
          options={{ title: "ForgotPassword" }}
        />

        <Stack.Screen
          name='VerifyEmail'
          component={ChangePassword}
          options={{ title: "ChangePassword" }}
        />
        <Stack.Screen
          name='ChangePassword'
          component={VerifyEmail}
          options={{ title: "VerifyEmail" }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


