
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';
import { Container, ContainerCam, ContainerRow } from '../Container/StyleContainer';
import { ButtonFlip } from '../Button/Button';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

export default function Cam() {

    const CamRef = useRef(null)
    // Estado para controlar o tipo de câmera (frontal ou traseira)
    const [typeCam, setTypeCam] = useState(Camera.Constants.Type.front)


    // Efeito para solicitar permissões de câmera e mídia quando o componente é montado
    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
            const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
        })();
    }, [])

    return (
        <Container>
            <ContainerCam>
                <Camera
                    ref={CamRef}
                    type={typeCam}
                >
                    <ContainerRow>
                        {/* Botão para alternar entre câmera frontal e traseira */}
                        <ButtonFlip onPress={() => setTypeCam(typeCam == CameraType.front ? CameraType.back : CameraType.front)}>

                            <MaterialCommunityIcons name='camera-flip' color={'white'} size={80} />
                            
                        </ButtonFlip>
                    </ContainerRow>
                </Camera>
            </ContainerCam>
        </Container>
    )
}