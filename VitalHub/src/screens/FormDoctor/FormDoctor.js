import { View } from "react-native"
import { BoxInputForm, BoxInputPhoto } from "../../components/BoxInput/BoxInput"
import { Button, ButtonSendPhoto, ButtonTitle } from "../../components/Button/Button"
import { Container, ContainerForm, DoubleView, HR, InputContainer, TransparentContainer, ViewRow } from "../../components/Container/StyleContainer"
import { HeaderContainer, HeaderPhoto } from "../../components/HeaderPhoto/HeaderPhoto"
import { LinkCancel } from "../../components/Links/StyleLink"
import { TextAccount, TextRed } from "../../components/Text/Text"
import { Title } from "../../components/Title/StyleTitle"
import { ScrollForm } from "../Profile/StyleProfile"
import { MaterialIcons } from '@expo/vector-icons'

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

                    {/*  Haver Possibilidade troca dos inputs pois ele podem mudar borda e cor */}
                    <BoxInputForm
                        
                        fieldHeigth={120}
                        textLabel={"Descricao"}
                        placeholder={"Descricao"} />

                    <BoxInputForm
                        // 
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
                            <ButtonTitle onPress={() => navigation.navigate('EditFormDoctor')}>Editar</ButtonTitle>
                        </Button>

                        <LinkCancel >Cancelar</LinkCancel>

                    </InputContainer>




                    {/* Parte adicional do medico  */}
                    {/* Fazer validacao  */}



                    <BoxInputPhoto
                        fieldHeigth={120}
                        placeholder={"Nenhuma Foto"}
                        textLabel={"Exames Medicos"} />

                    <ViewRow>
                        <ButtonSendPhoto>
                            <ButtonTitle> <MaterialIcons
                                name="add-a-photo"
                                size={24}
                                color={"white"}
                            /></ButtonTitle>
                            <ButtonTitle>ENTRAR</ButtonTitle>
                        </ButtonSendPhoto>

                        <TransparentContainer>
                            <TextRed>Cancelar</TextRed>
                        </TransparentContainer>
                    </ViewRow>
                    <HR />

                    <BoxInputForm

                        fieldHeigth={120}
                        placeholder={"Resultado do Exame "}
                    />

                    <LinkCancel>Voltar</LinkCancel>
                </ScrollForm>

            </ContainerForm>
        </Container>
    )
}