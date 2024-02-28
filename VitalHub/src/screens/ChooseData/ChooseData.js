import { useState } from "react";
import { Container } from "../../components/Container/StyleContainer"
import { Title } from "../../components/Title/StyleTitle"
import ChooseCalendar from "../../components/ChooseCalendar/ChooseCalendar";

export const ChooseData = ({ navigation }) => {

    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();
    return (
        <Container>

            <Title> Selecionar Data </Title>
            <ChooseCalendar
                selectedDate={selectedDate}
                handleSelectedDateFn={setSelectedDate} />
        </Container>
    )
}