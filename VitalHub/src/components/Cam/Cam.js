import React, { useEffect, useRef, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { Camera, CameraType } from 'expo-camera';

import { Container, ContainerButtonCam, ContainerCam, ContainerForm, ContainerRow } from '../Container/StyleContainer';
import { ButtonFlip } from '../Button/Button';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Alert, Modal } from 'react-native';

export default function Cam({ onClose, setIsCamVisible }) {
    const camRef = useRef(null);
    const [typeCam, setTypeCam] = useState(Camera.Constants.Type.front);
    // Estado para armazenar a foto capturada
    const [photo, setPhoto] = useState(null)
    const [capturePhoto, setCapturePhoto] = useState(null)

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
            const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
        })();
    }, []);


    // Função assíncrona para capturar a foto
    async function CapturePhoto() {
        if (camRef) {
            const photo = await cameraRef.current.takePictureAsync();
            await setCapturePhoto(photo.uri)
            setPhoto(photo.uri)
            setOpenModal(true)
            console.log(photo);
        }
    }

    // Função assíncrona para limpar a foto
    async function ClearPhoto() {
        setPhoto(null)
        setOpenModal(false)
    }

    // Função assíncrona para salvar a foto na galeria
    async function SavePhoto() {
        if (photo) {
            await MediaLibrary.createAssetAsync(photo)
                .then(() => { Alert.alert('Sucesso', 'Foto salva na galeria') })
                .catch(Error => { Alert.alert('Erro', 'Foto não foi salva') })
            setOpenModal(false)
        }
    }

    const handleCloseModal = () => {
        onClose();
    };

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={true}
            onRequestClose={onClose}>

            
                <Camera
                    ref={camRef}
                    type={typeCam}
                    style={{ flex: 1, justifyContent:'flex-end', }}
                >

                    <ContainerButtonCam>
                        {/* Botão para capturar a foto */}
                        <ButtonFlip onPress={() => CapturePhoto()}>
                            <FontAwesome name='camera' size={30} color={'#000'} />
                        </ButtonFlip>

                        <ButtonFlip onPress={() => setTypeCam(typeCam == CameraType.front ? CameraType.back : CameraType.front)}>
                            <MaterialCommunityIcons name='camera-flip' color={'#000'} size={40} />
                        </ButtonFlip>




                    </ContainerButtonCam>
                </Camera>




         
        </Modal>
    )
}
