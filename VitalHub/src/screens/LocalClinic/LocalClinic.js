import { BoxInput } from "../../components/BoxInput/BoxInput"
import { Container, DoubleView } from "../../components/Container/StyleContainer"
import { MapaPhoto } from "../../components/HeaderPhoto/HeaderPhoto"
import { LinkCancel } from "../../components/Links/StyleLink"
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
                <DoubleView>

                    <BoxInput

                        fieldWidth={40}
                        placeholder={"578"}
                        textLabel={"Numero"}
                    />
                    <BoxInput
                        fieldWidth={40}
                        placeholder={"Moema"}
                        textLabel={"Bairro"} />

                </DoubleView>

                <LinkCancel style={{ marginTop: 50}} onPress = {() => navigation.replace ("Home")}>Voltar</LinkCancel>
            </Container>
        </>


    )
}

