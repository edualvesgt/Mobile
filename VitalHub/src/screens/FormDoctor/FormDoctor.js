import { BoxInputForm } from "../../components/BoxInput/BoxInput"
import { Button, ButtonTitle } from "../../components/Button/Button"
import { Container, ContainerForm, InputContainer } from "../../components/Container/StyleContainer"
import { HeaderContainer, HeaderPhoto } from "../../components/HeaderPhoto/HeaderPhoto"
import { LinkCancel } from "../../components/Links/StyleLink"
import { TextAccount } from "../../components/Text/Text"
import { Title } from "../../components/Title/StyleTitle"
import { ScrollForm } from "../Profile/StyleProfile"

export const FormDoctor = ({ navigation }) => {
    return (
        <Container>
            <HeaderContainer>
                <HeaderPhoto source={require("../../assets/PhotoProfile.png")} />
            </HeaderContainer>

            <ContainerForm>

                <Title>Richard Kosta</Title>
                <TextAccount>22 Anos    richard.kosta@gmail.com</TextAccount>
                <ScrollForm>
                    <BoxInputForm
                        fieldHeigth={120}
                        textLabel={"Descricao"}
                        placeholder={"Descricao"} />

                    <BoxInputForm
                        textLabel={"Diagnostico"}
                        placeholder={"Diagnostico"}
                    />
                    <BoxInputForm
                        fieldHeigth={120}
                        textLabel={"Prescricao Medica"}
                        placeholder={"Prescricao Medica"}
                    />


                    <InputContainer>
                        <Button>
                            <ButtonTitle>Salvar</ButtonTitle>
                        </Button>

                        <Button>
                            <ButtonTitle>Editar</ButtonTitle>
                        </Button>

                        <LinkCancel >Cancelar</LinkCancel>
                    </InputContainer>

                    
                </ScrollForm>

            </ContainerForm>
        </Container>
    )
}