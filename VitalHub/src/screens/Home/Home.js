// Importa o hook useState do React para gerenciar o estado local
import { useState } from "react";

// Importa o componente ButtonFilter que será usado para filtrar as consultas
import { ButtonFilter } from "../../components/ButtonFilter/ButtonFilter";

// Importa o componente Calendar que será usado para exibir um calendário
import Calendar from "../../components/Calendar/Calendar";

// Importa os componentes Container e RowContainer que serão usados para organizar o layout
import { Container, FlatContainer, RowContainer } from "../../components/Container/StyleContainer";

// Importa o componente Header que será usado para exibir o cabeçalho da página
import { Header } from "../../components/Header/Header";

// Importa o componente ScrollForm que será usado para exibir os itens em uma lista rolável
import { ScrollForm } from "./StyleHome"

// Importa o componente Card que será usado para exibir os detalhes de cada consulta
import Card from "../../components/Card/Card";
import CancelAppointment from "../../components/CancelAppointment/CancelAppointment";

// Componente de página inicial
export const Home = () => {

    // Define a imagem que será usada para exibir no perfil do médico
    const image = require("../../assets/PhotoProfile.png");

    // Define o estado inicial dos botões selecionados
    // Este estado será usado para controlar qual filtro está ativo
    const [selected, setSelected] = useState({
        agendadas: true,
        realizadas: false,
        canceladas: false,
    });

    // Define os dados dos itens que serão exibidos
    // Cada item representa uma consulta com um ID, tempo, imagem e status
    const dataItens = [
        {
            id: 'fsdfsfsdf',
            time: '22:00',
            image: image,
            status: "r" // 'r' representa 'realizada'
        },
        {
            id: 'sdfsdf',
            time: '23:00',
            image: image,
            status: "a" // 'a' representa 'agendada'
        },
        {
            id: 'asdas',
            time: '16:00',
            image: image,
            status: "c" // 'c' representa 'cancelada'
        }
    ]

    // Função para verificar se um item deve ser exibido com base no filtro ativo
    const Check = (data) => {
        if (data.status === "a" && selected.agendadas == true) {
            return true;
        }
        if (data.status === "r" && selected.realizadas == true) {
            return true;
        }
        if (data.status === "c" && selected.canceladas == true) {
            return true;
        }
        return false;
    }

    // Filtra os itens com base no filtro ativo
    const data = dataItens.filter(Check);


    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log(isModalOpen);
    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };;
    


    // Renderiza o componente Header, Container, Calendar, RowContainer, ScrollForm e FlatContainer
    // O componente ButtonFilter é usado para controlar os filtros
    // O componente Card é usado para exibir os detalhes de cada consulta
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
                    <ButtonFilter onPress={() => { setSelected({agendadas: true }) }} selected={selected.agendadas} buttonTitle={'Agendadas'} />
                    {/* Renderiza o componente ButtonFilter para as consultas realizadas */}
                    <ButtonFilter onPress={() => { setSelected({realizadas: true }) }} selected={selected.realizadas} buttonTitle={'Realizadas'} />
                    {/* Renderiza o componente ButtonFilter para as consultas canceladas */}
                    <ButtonFilter onPress={() => { setSelected({canceladas: true }) }} selected={selected.canceladas} buttonTitle={'Canceladas'} />
                </RowContainer>
                {/* Renderiza o componente ScrollForm */}
                <ScrollForm>
                    {/* Renderiza o componente FlatContainer que irá renderizar os itens da lista */}
                    <FlatContainer
                        data={data}
                        renderItem={({ item }) =>  
                        <Card time={item.time} image={item.image} status={item.status} onPressCard={isModalOpen}/>}
                        keyExtractor={item => item.id} />
                </ScrollForm>
            </Container>

            <CancelAppointment isOpen={true} onClose={closeModal} />
        </>
    )
}
