import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import {MapView} from 'react-native-maps';


export default function Map() {
    const mapReference = useRef(null);
    const [initialPosition, setInitialPosition] = useState(null);
    const [finalPosition, setFinalPosition] = useState();

    async function CapturarLocalizacao() {
        const { granted } = await requestForegroundPermissionsAsync();
        if (granted) {
            const captureLocation = await getCurrentPositionAsync();
            setInitialPosition(captureLocation);
        }
    }

    useEffect(() => {
        CapturarLocalizacao();
    }, [1000])

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: -25.2412,
                    longitude: -45.2536,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                // provider={PROVIDER_GOOGLE}
                style={styles.map}
            >

            </MapView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
    },
    map:{
        width:"100%"
    }
})