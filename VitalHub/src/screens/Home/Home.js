import { useState } from "react";
import { ButtonFilter } from "../../components/ButtonFilter/ButtonFilter"; // Importa o componente ButtonFilter
import Calendar from "../../components/Calendar/Calendar"; // Importa o componente Calendar
import { Container, RowContainer } from "../../components/Container/StyleContainer"; // Importa os componentes Container e RowContainer
import { Header } from "../../components/Header/Header"; // Importa o componente Header

// Componente de página inicial
export const Home = () => {

    // Define o estado inicial dos botões selecionados
    const [selected, setSelected] = useState({
        agendadas: true,
        realizadas: false,
        canceladas: false,
    });

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

                
            </Container>
        </>
    )
}
