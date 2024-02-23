
import CardClinic from "../../components/CardClinic/CardClinic"
import { Container } from "../../components/Container/StyleContainer"
import { Title } from "../../components/Title/StyleTitle"

export const ChooseClinic = () => {
    return(
        <Container>
            <Title>Selecionar Clinica </Title>
            <CardClinic/>
        </Container>
    )
}