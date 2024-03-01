import { useState } from "react";
import { ContainerClinic } from "../../components/Container/StyleContainer"
import { Label, Title } from "../../components/Title/StyleTitle"
import ChooseCalendar from "../../components/ChooseCalendar/ChooseCalendar";
import { InputSelect } from "../../components/Input/Input";
import { Button, ButtonTitle } from "../../components/Button/Button";
import { LinkCancel } from "../../components/Links/StyleLink";
import ConfirmAppontment from "../../components/ConfirmAppointment/ConfirmAppointment";

export const ChooseData = ({ navigation }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };;

    return (
        <ContainerClinic>

            <Title> Selecionar Data </Title>
            <ChooseCalendar />
            <Label>Selecione um horário disponível</Label>
            <InputSelect />
            <Button onPress = {() => openModal()}>
                <ButtonTitle>Confirmar</ButtonTitle>
            </Button>
            <LinkCancel>Cancelar</LinkCancel>

            <ConfirmAppontment isOpen={isModalOpen} onClose={closeModal}/>
        </ContainerClinic>

    )
}