import { useState } from "react";
import { Button, ButtonTitle } from "../Button/Button";
import { LinkCancel } from "../Links/StyleLink";
import { TextAbout } from "../Text/Text";
import { Title } from "../Title/StyleTitle";
import { PhotoShow, ShowModalContainer, ShowModalContent } from "./StyleShowFormDoctor";

const ShowFormDoctor = ({ isOpen, onClose, navigation, situacion, titleName, about }) => {

    const image = require("../../assets/PhotoGirl.png");

    if (!isOpen) {
        return null;
    }

    const [profile, setProfile] = useState("Medico");

    // Função para lidar com a pressão do botão "Card/Ver  Prontuario"
    const handleInsertButtonPress = () => {
        if (profile === "Paciente") {
            navigation.replace("FormDoctor");
        }
        // Caso contrário, não faz nada.
    };

    // Verifica se a situação é cancelada e retorna null para esse caso
    if (situacion.canceladas === true) {
        return null;
    }

    return (
        <ShowModalContainer>
            <ShowModalContent>
                <PhotoShow source={image} />
                <Title>{titleName}</Title>
                <TextAbout>{about}</TextAbout>

                {situacion.agendadas === true ? (
                    <Button onPress={() => navigation.replace('LocalClinic')}>
                        <ButtonTitle>Ver Local Consulta</ButtonTitle>
                    </Button>
                ) : (
                    <Button onPress={handleInsertButtonPress}>
                        <ButtonTitle>Inserir Prontuario</ButtonTitle>
                    </Button>
                )}

                <LinkCancel onPress={onClose} >Cancelar</LinkCancel>
            </ShowModalContent>
        </ShowModalContainer>
    );
};

export default ShowFormDoctor;
