import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    // Navegacao

    //Container
    //StackNavigator
    //StackScreen

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
        name='Navegacao'
        component={Navegacao}
        options={{title: "Navegacao"}}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}


