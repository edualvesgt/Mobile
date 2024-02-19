import { useState } from "react";
import { ButtonFilter } from "../../components/ButtonFilter/ButtonFilter"; // Importa o componente ButtonFilter
import Calendar from "../../components/Calendar/Calendar"; // Importa o componente Calendar
import { Container, FlatContainer, RowContainer } from "../../components/Container/StyleContainer"; // Importa os componentes Container e RowContainer
import { Header } from "../../components/Header/Header"; // Importa o componente Header
import { ScrollForm } from "./StyleHome"
import Card from "../../components/Card/Card";


// Componente de página inicial
export const Home = () => {

    const image = require("../../assets/PhotoProfile.png");

    // Define o estado inicial dos botões selecionados
    const [selected, setSelected] = useState({
        agendadas: true,
        realizadas: false,
        canceladas: false,
    });


    const dataItens = [
        {
            id: 'fsdfsfsdf',
            time: '22:00',
            image: image,
            status: "r"
        },
        {
            id: 'sdfsdf',
            time: '23:00',
            image: image,
            status: "a"
        },
        {
            id: 'asdas',
            time: '16:00',
            image: image,
            status: "c"
        }
    ]

    const Check = (data) => {
        if (data.status === "a" && selected.agendadas) {
            return true;
        }
        if (data.status === "r" && selected.realizadas) {
            return true;
        }
        if (data.status === "c" && selected.canceladas) {
            return true;
        }
        return false;
    }

    const data = dataItens.filter(Check);
    return (
        <>
            {/* Renderiza o componente Header */}
            <Header />
            {/* Renderiza o componente Container */}
            <Container>
                {/* Renderiza o componente Calendar */}
                <Calendar />
                {/* Renderiza o componente RowContainer */}
                <RowContainer>
                    {/* Renderiza o componente ButtonFilter para as consultas agendadas */}
                    <ButtonFilter onPress={() => { setSelected({ agendadas: true }) }} selected={selected.agendadas} buttonTitle={'Agendadas'} />
                    {/* Renderiza o componente ButtonFilter para as consultas realizadas */}
                    <ButtonFilter onPress={() => { setSelected({ realizadas: true }) }} selected={selected.realizadas} buttonTitle={'Realizadas'} />
                    {/* Renderiza o componente ButtonFilter para as consultas canceladas */}
                    <ButtonFilter onPress={() => { setSelected({ canceladas: true }) }} selected={selected.canceladas} buttonTitle={'Canceladas'} />
                </RowContainer>
                <ScrollForm>
                    <FlatContainer
                        data={data}
                        renderItem={({ item }) => 
                        <Card time={item.time} image={image}  status={"a"}/>}
                        keyExtractor={item => item.id} />
                </ScrollForm>

            </Container>
        </>
    )
}
