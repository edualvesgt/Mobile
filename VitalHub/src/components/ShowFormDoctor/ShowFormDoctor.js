
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


    const [profile, setProfile] = useState("Paciente")


    return (
        <ShowModalContainer>
            <ShowModalContent>

                <PhotoShow source={image} />

                <Title>{titleName}</Title>
                <TextAbout>{about}</TextAbout>

                {
                    situacion.canceladas === true ? (
                        <>
                        </>
                    ) : situacion.agendadas === true ? (
                        <Button onPress={() => navigation.navigate('LocalClinic')}>
                            <ButtonTitle>Ver Local Consulta</ButtonTitle>
                        </Button>
                    ) : (

                        <Button onPress={profile == "Paciente" ? () => navigation.replace("FormDoctor") : isOpen}>
                            <ButtonTitle>Inserir Prontuario</ButtonTitle>
                        </Button>
                    )
                }


                <LinkCancel onPress={onClose} >Cancelar</LinkCancel>
            </ShowModalContent>
        </ShowModalContainer>
    );

};

export default ShowFormDoctor;
