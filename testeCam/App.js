import { Alert, Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

export default function App() {
  // Referência para a câmera
  const cameraRef = useRef(null)
  // Estado para armazenar a foto capturada
  const [photo, setPhoto] = useState(null)
  // Estado para controlar a abertura e fechamento do modal
  const [openModal, setOpenModal] = useState(false)
  // Estado para controlar o tipo de câmera (frontal ou traseira)
  const [typeCam, setTypeCam] = useState(Camera.Constants.Type.front)

  // Função assíncrona para capturar a foto
  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
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

  // Efeito para solicitar permissões de câmera e mídia quando o componente é montado
  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
      const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
    })();
  }, [])

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        type={typeCam}
        style={styles.camera}
      >
        <View style={styles.viewFlip}>
          {/* Botão para alternar entre câmera frontal e traseira */}
          <TouchableOpacity style={styles.buttonFlip} onPress={() => setTypeCam(typeCam == CameraType.front ? CameraType.back : CameraType.front)}>
            <MaterialCommunityIcons name='camera-flip' color={'white'} size={80} />
          </TouchableOpacity>
        </View>
      </Camera>

      {/* Botão para capturar a foto */}
      <TouchableOpacity style={styles.buttonCaptura} onPress={() => CapturePhoto()}>
        <FontAwesome name='camera' size={23} color={'#fff'} />
      </TouchableOpacity>

      {/* Modal para exibir a foto capturada */}
      <Modal animationType='slide' transparent={false} visible={openModal}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
          {/* Exibir a foto */}
          <Image style={{ width: '100%', height: 500, borderRadius: 10 }} source={{ uri: photo }} />

          {/* Botões para limpar a foto ou salvar na galeria */}
          <View style={{ margin: 10, flexDirection: 'row', }}>
            <TouchableOpacity style={styles.buttonCancel} onPress={() => ClearPhoto()}>
              <FontAwesome name='trash' size={35} color={'#ff0000'} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonUpload} onPress={() => SavePhoto()}>
              <FontAwesome name='save' size={35} color={'#121212'} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  camera: {
    flex: 1,
    width: "100%",
    height: "80%"
  },
  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttonFlip: {
    padding: 15,
  },
  buttonCaptura: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "center"
  },
  buttonCancel: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'transparent',
    alignItems: "center",
    justifyContent: "center"
  },
  buttonUpload: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'transparent',
    alignItems: "center",
    justifyContent: "center"
  },
});
