import { LinkMedium } from "../../Links/StyleLink"
import { Container } from "../../components/Container/StyleContainer"
import { Input } from "../../components/Input/StyleInput"
import { Logo } from "../../components/Logo/StyleLogo"
import { Title } from "../../components/Title/StyleTitle"

export const Login = () => {

    return (
        <Container>
            <Logo source={require("../../assets/VitalHub_LogoAzul.png")} />
            <Title>Entrar ou Criar Conta</Title>
            <Input
                placeholder={"Usuario ou Email"}
            />
            <Input
                placeholder={"Senha"}
                secureTextEntry={true}
            />
            <LinkMedium>Esqueceu Sua Senha?</LinkMedium>
            {/*

            <Button>
                <ButtonTitle></ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle></ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount></TextAccount>
            </ContentAccount> */}
        </Container>
    )


}