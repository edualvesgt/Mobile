import { useState } from "react";
import { ContainerClinic } from "../../components/Container/StyleContainer"
import { Label, Title } from "../../components/Title/StyleTitle"
import ChooseCalendar from "../../components/ChooseCalendar/ChooseCalendar";
import { InputSelect } from "../../components/Input/Input";

export const ChooseData = ({ navigation }) => {

    return (
        <ContainerClinic>

            <Title> Selecionar Data </Title>
            <ChooseCalendar />
            <Label>Selecione um horário disponível</Label>
            <InputSelect />
        </ContainerClinic>
    )
}