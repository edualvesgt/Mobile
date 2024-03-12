import { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

// Importando o componente MapView e Marker do pacote react-native-maps
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

// Importando funções para solicitar permissões de localização e obter a localização atual
import {
  requestForegroundPermissionsAsync, // Solicita permissão para acessar a localização do usuário
  getCurrentPositionAsync,// Obtém a localização atual do usuário

  watchPositionAsync, //Monitora O posicionamento 
  LocationAccuracy
} from 'expo-location'

// Importando o componente MapViewDirections para exibir rotas no mapa
import MapViewDirections from 'react-native-maps-directions'

// Importando a chave da API do Google Maps
import { mapskey } from './utils/mapsApiKey'

export default function App() {

  // Cria uma referência para o componente MapView para manipulações futuras
  const mapReference = useRef(null)
  // Estado para armazenar a posição inicial do usuário
  const [initialPosition, setInitialPosition] = useState(null)
  // Estado para armazenar a posição final (destino)
  const [finalPosition, setFinalPosition] = useState({ latitude: -23.5214904, longitude: -46.408381 })

  // Função assíncrona para capturar a localização atual do usuário
  async function CapturarLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync() // Solicita permissão para acessar a localização

    if (granted) { // Se a permissão for concedida
      const captureLocation = await getCurrentPositionAsync() // Obtém a localização atual

      setInitialPosition(captureLocation) // Atualiza o estado com a localização atual

      console.log(initialPosition) // Loga a localização atual no console
    }
  }

  // Efeito que executa a função CapturarLocalizacao quando o componente é montado
  useEffect(() => {

    CapturarLocalizacao();

    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1,
    },
    
    async (response) => {

      await setInitialPosition(response);

        mapReference.current?.animateCamera({
          pitch: 60,
          center: response.coords
        })

        console.log(response);
      
    })
  }, [1000]) 

  // Efeito que recarrega a visualização do mapa quando a posição inicial muda
  useEffect(() => {
    RecarregarVizualizacaoMapa()
  }, [initialPosition])

  // Função assíncrona para recarregar a visualização do mapa
  async function RecarregarVizualizacaoMapa() {
    if (mapReference.current && initialPosition) { // Se a referência do mapa estiver disponível e a posição inicial estiver definida
      await mapReference.current.fitToCoordinates(
        [
          { latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude }, // Posição inicial
          { latitude: finalPosition.latitude, longitude: finalPosition.longitude }, // Posição final
        ],
        {
          edgePadding: { top: 60, right: 60, bottom: 60, left: 60 }, // Padding ao redor da área visível
          animated: true // Anima a transição para a nova área visível
        }
      )
    }
  }

  return (
    <View style={styles.container}>
      {
        initialPosition != null
          ? (
            <MapView
              ref={mapReference} // Referência para manipulação do mapa
              initialRegion={{ // Define a região inicial do mapa
                latitude: initialPosition.coords.latitude,
                longitude: initialPosition.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
              provider={PROVIDER_GOOGLE} // Define o provedor do mapa como Google Maps
              customMapStyle={grayMapStyle} // Aplica um estilo personalizado ao mapa
              style={styles.map} // Estilo do componente MapView
            >
              <Marker // Marca a posição inicial do usuário
                coordinate={{
                  latitude: initialPosition.coords.latitude,
                  longitude: initialPosition.coords.longitude,
                }}
                title='Posição inicial'
                description='Estou aqui'
                pinColor={'blue'}
              />

              <MapViewDirections // Exibe a rota do ponto inicial até o destino
                origin={initialPosition.coords}
                destination={{
                  latitude: -23.5214904,
                  longitude: -46.408381,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}
                strokeWidth={5}
                strokeColor='#496BBA'
                apikey={mapskey} // Chave da API do Google Maps
              />

              <Marker // Marca o destino
                coordinate={{
                  latitude: -23.5214904,
                  longitude: -46.408381
                }}
                title='Destino'
                description='Preciso ir pra lá'
                pinColor={'red'}
              />
            </MapView>
          ) : (
            <>
              <Text>Localização não encontrada</Text>

              {/* Indicador de carregamento  */}
              <ActivityIndicator />  
            </>
          )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%'
  }
});

// Estilo personalizado para o mapa
const grayMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#E1E0E7",
      },
    ],
  },
  {
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: -5,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#33303E",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#66DA9F",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1B1B1B",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#C6C5CE",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ACABB7",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#8EA5D9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
];
