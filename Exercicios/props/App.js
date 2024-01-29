// Importando componentes necessários do React Native
import { FlatList, SafeAreaView } from 'react-native';

// Importando o componente Person do diretório especificado
import Person from './src/components/Person';

// Importando o hook useFonts e a fonte SingleDay_400Regular do pacote @expo-google-fonts/single-day
import { useFonts, SingleDay_400Regular } from '@expo-google-fonts/single-day';

// Função principal do aplicativo
export default function App() {

  // Carregando a fonte SingleDay_400Regular usando o hook useFonts
  let [fontsLoaded, fontError] = useFonts({
    SingleDay_400Regular,
  });

  // Verificando se as fontes foram carregadas com sucesso, caso contrário, retorna null
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Simulando uma lista de pessoas com informações fictícias
  const peopleList = [
    {id:"1",name: "Eduardo", age:"20 Anos"},
    {id:"2",name: "Andre", age:"35 Anos"},
    {id:"3",name: "Papito", age:"16 Anos"},
    {id:"4",name: "Italia", age:"17 Anos"},
  ];

  // Renderizando a interface do aplicativo
  return (
    <SafeAreaView>
      {/* Utilizando o componente FlatList para exibir a lista de pessoas */}
      <FlatList
        // Especificando a origem dos dados para a FlatList
        data={peopleList}
        // Função para extrair chaves únicas de cada item da lista
        keyExtractor={(item) => item.id}
        // Função para renderizar cada item da lista usando o componente Person
        renderItem={({item}) => (
          <Person
            name={item.name}
            age={item.age}
          />
        )}
      />
    </SafeAreaView>
  );
}
