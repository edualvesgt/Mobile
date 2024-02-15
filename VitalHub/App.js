import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from './src/screens/Navigation/Navigation';
import { Login } from './src/screens/Login/Login';
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';
import { ForgotPassword } from './src/screens/ForgotPassword/ForgotPassword';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { VerifyEmail } from './src/screens/VerifyEmail/VerifyEmail';
import { ChangePassword } from './src/screens/ChangePassword/ChangePassword';
import { CreateAccount } from './src/screens/CreateAccount/CreateAccount';
import { Profile } from './src/screens/Profile/Profile';
import { FormDoctor } from './src/screens/FormDoctor/FormDoctor';
import { Home } from './src/screens/Home/Home';


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
        />  */}

        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: "Home" }}
        />

        <Stack.Screen
          name='FormDoctor'
          component={FormDoctor}
          options={{ title: "FormDoctor" }}
        />

        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: "Login" }}
        />


        <Stack.Screen
          name='VerifyEmail'
          component={VerifyEmail}
          options={{ title: "VerifyEmail" }}
        />

        <Stack.Screen
          name='ForgotPassword'
          component={ForgotPassword}
          options={{ title: "ForgotPassword" }}
        />
        <Stack.Screen
          name='CreateAccount'
          component={CreateAccount}
          options={{ title: "CreateAccount" }}
        />

        <Stack.Screen
          name='ChangePassword'
          component={ChangePassword}
          options={{ title: "ChangePassword" }}
        />

      </Stack.Navigator>


    </NavigationContainer>
  );
}


