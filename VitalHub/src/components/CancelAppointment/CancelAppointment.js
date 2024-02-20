import { Text } from "react-native";
import { Container } from "../Container/StyleContainer";
import { ModalBackground, ModalContainer, ModalContent } from "./StyleCancelAppointment";
import { Title } from "../Title/StyleTitle";
import { TextAccount } from "../Text/Text";
import { Button, ButtonTitle } from "../Button/Button";
import { LinkCancel } from "../Links/StyleLink";


const CancelAppointment = ({ isOpen, onClose  }) => {

    if (!isOpen) {
        return null;
    }
    

    return (
        <ModalContainer>
            <ModalContent>
                <Title>Cancelar Consulta</Title>

                <TextAccount>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</TextAccount>

                <Button>
                    <ButtonTitle>Confirmar</ButtonTitle>
                </Button>
                <LinkCancel>Cancelar</LinkCancel>
            </ModalContent>
        </ModalContainer>
    );

};

export default CancelAppointment;
