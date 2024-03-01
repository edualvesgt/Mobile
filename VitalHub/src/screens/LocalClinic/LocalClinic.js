import { BoxInput } from "../../components/BoxInput/BoxInput"
import { Container, DoubleView, ViewRow } from "../../components/Container/StyleContainer"
import { MapaPhoto } from "../../components/HeaderPhoto/HeaderPhoto"
import { TextAppointment } from "../../components/Text/Text"
import { Title } from "../../components/Title/StyleTitle"

export const LocalClinic = ({ navigation }) => {
    return (
        <>
            <MapaPhoto source={require("../../assets/Mapa.png")} />

            <Container>
                <Title style={{ marginTop: 30 }}>Clinica Natureba</Title>
                <TextAppointment>Sao Paulo , SP</TextAppointment>

                <BoxInput
                    textLabel={"Endereco"}
                    placeholder={"Rua Padre Vicente"}
                />
                <ViewRow>

                    <BoxInput
                       
                        fieldWidth={54}
                        placeholder={"578"}
                        textLabel={"Numero"}
                    />
                    <BoxInput
                        fieldWidth={54}
                        placeholder={"Moema"}
                        textLabel={"Bairro"} />

                </ViewRow>
            </Container>

        </>
    )
}