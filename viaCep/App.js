import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Header } from './src/Components/Header/Header';
import { ContainerApp } from './Styles';
import { Home } from './src/Screens/Home/Home';

export default function App() {
  const [fontLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontLoaded && !fontError) {
    return null;
  }

  else {

  }

  return (
    <ContainerApp>

      <Header />

      <Home />

      
    </ContainerApp>
  );
}


